import React, { Component } from 'react'
import { Container, WelcomeText } from './styles'

export class MainScreen extends Component {
  render() {
    return (
      <Container>
        <WelcomeText>Main!</WelcomeText>
      </Container>
    )
  }
}

export default MainScreen
