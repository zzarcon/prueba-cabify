import React from 'react'
import { PropTypes } from 'prop-types'
import EmptyFilms from './EmptyFilms'

export const Films = ({ films }) => {
  const filmsList = films.map(({ title }, index) => {
    return <li key={`${index}-${title}`}>{title}</li>
  })

  return (
    <ul id='films-list'>
      {films.length ? filmsList : <EmptyFilms/>}
    </ul>
  )
}

Films.defaultProps = {
  films: []
}

Films.propTypes = {
  films: PropTypes.array
}
