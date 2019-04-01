import Films from './pageObjects/Films'

describe('Films', () => {
  it('get film list', () => {
    const films = new Films()
      .getFilms()

    expect(films).to.be.true
  })
})