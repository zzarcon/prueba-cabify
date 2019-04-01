const FILMS_LIST = '#films-list'
const FILMS_PATH = '/films'

class Films {
  constructor() {
    cy.visit(FILMS_PATH)
  }

  getFilms() {
    cy
    .get(FILMS_LIST)
    .should('exist')

    return true
  }
}

export default Films
