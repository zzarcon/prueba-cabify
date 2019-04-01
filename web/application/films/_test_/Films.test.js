import React from 'react'
import { render, cleanup } from 'react-testing-library'
import withReduxStore from '../../../infrastructure/withReduxStore'
import Films from '../index'
import FilmsPageObject from './pageobjects/FilmsPageObject'

jest.mock('../repositories/FilmsRepository')
require('babel-polyfill')

const NUMBER_OF_FILMS = 8

afterEach(cleanup)

describe('Films', () => {
  let page

  beforeEach(() => {
    const container = render(withReduxStore(<Films />))
    page = new FilmsPageObject(container)
  })

  test('should be listed', () => {
    let films = page.obtainFilms()
    expect(films).toHaveLength(NUMBER_OF_FILMS)
  })

  test('should be empty list', () => {
    // Mock Repository to return empty list
  })

  test('should be loading list', () => {
    // Mock Repository to timeout
  })

  test('should show episode title', () => {
    const thePhantomMenace = page.obtainFilmWithTitle('The Phantom Menace')

    expect(thePhantomMenace).toBeDefined()
  })
})
