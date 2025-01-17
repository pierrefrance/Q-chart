const Lab = require("@hapi/lab");
const Code = require("@hapi/code");
const Hapi = require("@hapi/hapi");
const lab = (exports.lab = Lab.script());
const glob = require("glob");

const expect = Code.expect;
const before = lab.before;
const after = lab.after;
const it = lab.it;

const routes = require("../routes/routes.js");

const toolRuntimeConfig = require("./config/toolRuntimeConfig.json");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let server;

before(async () => {
  try {
    server = Hapi.server({
      port: process.env.PORT || 3000,
      routes: {
        cors: true
      }
    });
    await server.register(require("@hapi/inert"));
    server.route(routes);
  } catch (err) {
    expect(err).to.not.exist();
  }
});

after(async () => {
  await server.stop({ timeout: 2000 });
  server = null;
});

lab.experiment("basics", () => {
  it("starts the server", () => {
    expect(server.info.created).to.be.a.number();
  });

  it("is healthy", async () => {
    const response = await server.inject("/health");
    expect(response.payload).to.equal("ok");
  });
});

lab.experiment("schema endpoint", () => {
  it("returns 200 for /schema.json", async () => {
    const response = await server.inject("/schema.json");
    expect(response.statusCode).to.be.equal(200);
  });
});

lab.experiment("locales endpoint", () => {
  it("returns 200 for en translations", async () => {
    const request = {
      method: "GET",
      url: "/locales/en/translation.json"
    };
    const response = await server.inject(request);
    expect(response.statusCode).to.be.equal(200);
  });
  it("returns 200 for fr translations", async () => {
    const request = {
      method: "GET",
      url: "/locales/fr/translation.json"
    };
    const response = await server.inject(request);
    expect(response.statusCode).to.be.equal(200);
  });
});

lab.experiment("stylesheets endpoint", () => {
  it(
    "returns existing stylesheet with right cache control header",
    { plan: 2 },
    async () => {
      const filename = require("../styles/hashMap.json")["q-chart"];
      const response = await server.inject(`/stylesheet/${filename}`);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers["cache-control"]).to.be.equal(
        "max-age=31536000, immutable"
      );
    }
  );

  it("returns Not Found when requesting an inexisting stylesheet", async () => {
    const response = await server.inject("/stylesheet/inexisting.123.css");
    expect(response.statusCode).to.be.equal(404);
  });
});

lab.experiment("fixture data endpoint", () => {
  it("returns 35 fixture data items for /fixtures/data", async () => {
    const response = await server.inject("/fixtures/data");
    expect(response.statusCode).to.be.equal(200);
    expect(response.result.length).to.be.equal(35);
  });
});

// all the fixtures render with an svg
lab.experiment("all fixtures render", async () => {
  const fixtureFiles = glob.sync(
    `${__dirname}/../resources/fixtures/data/*.json`
  );
  toolRuntimeConfig.size = {
    width: [
      {
        value: 300,
        comparison: "="
      }
    ]
  };
  for (let fixtureFile of fixtureFiles) {
    const width = Math.floor(Math.random() * (800 - 350)) + 350;
    const fixture = require(fixtureFile);
    it(`doesnt fail in rendering fixture ${
      fixture.title
    } with width: ${width}`, async () => {
      const request = {
        method: "POST",
        url: "/rendering-info/web",
        payload: {
          item: fixture,
          toolRuntimeConfig: toolRuntimeConfig
        }
      };
      const response = await server.inject(request);
      const markup = response.result.markup;
      const dom = new JSDOM(markup);
      const svgElement = dom.window.document.querySelector(
        ".q-chart-svg-container svg"
      );
      expect(svgElement.innerHTML.length).to.be.greaterThan(200);
    });
  }
});
