import React, { Component } from 'react'
import { Container, WelcomeText } from './styles'

export class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <WelcomeText onPress={() => navigation.navigate('MainApp')}>
          Hello!
        </WelcomeText>
      </Container>
    )
  }
}

export default WelcomeScreen
