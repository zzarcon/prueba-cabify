import request from "supertest";
import app from "../../src/app";
import database from "../../src/database";

describe("Test the root path", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.disconnect();
  });

  test("It should response the GET method", done => {
    console.log(process.env.DATABASE_URI);
    return request(app)
      .get("/api/checkout/123")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
