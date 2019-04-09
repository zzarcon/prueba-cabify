describe("Basket", () => {
  test("It creates a new basket", done => {
    const basket = BasketService.create();
    expect(basket.id).toBeDefined;
  });
});
