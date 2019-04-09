import request from "supertest";
import app from "../../src/app";
import database from "../../src/database";

describe("Test the root path", () => {
  afterAll(() => {
    database.disconnect()
  });

  test("It should response the GET method", done => {
    console.log(process.env.DATABASE_URI);
    return request(app)
      .get("/api/checkout/123")
      .then(response => {
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
