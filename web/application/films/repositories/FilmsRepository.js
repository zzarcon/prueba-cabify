import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default {
  async retrieveFilms() {
    const filmsApiUrl = `${publicRuntimeConfig.apiUrl}/films`
    const response = await fetch(filmsApiUrl)
    const films = await response.json()
    return films
  }
}
