const sum = (a,b) => a + b

describe('Sum', () => {
  it('should add two numbers', () => {
    const RESULT = sum(3, 2)
  
    expect(RESULT).toBe(5)
  })
}) 