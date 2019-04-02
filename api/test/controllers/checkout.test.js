import request from 'supertest'
import app from "../../src/app"

describe('Test the root path', () => {
  test('It should response the GET method', done => {
      return request(app)
      .get("/api/checkout/123")
      .then(response => {
          expect(response.statusCode).toBe(200)
          done()
      })
  });
})
