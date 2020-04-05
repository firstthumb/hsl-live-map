import React from 'react'
import {Container} from '@material-ui/core'

export const Home: React.FC = ({children}) => {
  return (
    <>
      <Container fixed>{children}</Container>
    </>
  )
}
