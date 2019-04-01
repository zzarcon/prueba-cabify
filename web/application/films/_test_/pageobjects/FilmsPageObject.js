export default class FilmsPageObject {
  constructor({ getByText, queryAllByText, container }) {
    this.getByText = getByText
    this.queryAllByText = queryAllByText
    this.container = container
  }

  obtainFilms() {
    return this.container.querySelectorAll('#films-list li')
  }

  numberOfFilms() {
    return this.obtainFilms().length
  }

  obtainFilmWithTitle(title) {
    return this.getByText(title)
  }
}
