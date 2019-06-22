import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import MainNavigator from './MainNavigator'
import WelcomeNavigator from './WelcomeNavigator'

const RootNavigator = createSwitchNavigator(
  {
    MainApp: MainNavigator,
    WelcomeFlow: WelcomeNavigator
  },
  {
    initialRouteName: 'WelcomeFlow'
  }
)

export default createAppContainer(RootNavigator)
