const sum = (a,b) => a + b

describe('Sum', () => {
  it('should add two numbers', (done) => {
    const RESULT = sum(3, 2)
  
    expect(RESULT).to.equal(5)
    done()
  })
}) 