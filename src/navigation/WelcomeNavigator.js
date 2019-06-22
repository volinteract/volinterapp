import { createStackNavigator } from 'react-navigation'

import WelcomeScreen from '../screens/WelcomeScreen'

const WelcomeNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  }
})

export default WelcomeNavigator
