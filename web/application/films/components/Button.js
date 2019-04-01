import React from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  &&&{
    background:greenyellow;
  }
`

const FilmsButton = props => <StyledButton {...props}>{props.children}</StyledButton>

export default FilmsButton
