import sinon from "sinon"
require("sinon-mongoose")
import Basket from "../../src/models/Basket"

describe("Get all baskets", () => {

  it("should return all baskets", () => {
    var BasketMock = sinon.mock(Basket)
    var expectedResult = { baskets: ['a', 'b'] }
    BasketMock.expects("find").yields(null, expectedResult)
    Basket.find((err, result) => {
      BasketMock.verify()
      BasketMock.restore()
      expect(result.baskets.length).toBe(2)
    })
  })

})
