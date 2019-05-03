import React from 'react'
import { StatusBar } from 'react-native'
import { Provider as PaperProvider, Appbar } from 'react-native-paper'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { useScreens } from 'react-native-screens'
import { logOut } from './lib/network'
import { transitionConfig } from './lib/navigation'
import CustomHeader from './components/CustomHeader'

import InitialScreen from './screens/Initial'

import WelcomeScreen from './screens/Auth/Welcome'
import LogInScreen from './screens/Auth/LogIn'
import SignUpScreen from './screens/Auth/SignUp'
import HelloScreen from './screens/Auth/Hello'

import GoogleProviderScreen from './screens/Auth/Providers/Google'
import GitHubProviderScreen from './screens/Auth/Providers/GitHub'
import FacebookProviderScreen from './screens/Auth/Providers/Facebook'

import DashboardScreen from './screens/App/Dashboard'
import ReplScreen from './screens/App/Repl'
import FileScreen from './screens/App/File'

const AuthNavigator = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  LogIn: { screen: LogInScreen },
  SignUp: { screen: SignUpScreen },
  Hello: { screen: HelloScreen },

  GoogleProvider: { screen: GoogleProviderScreen },
  GitHubProvider: { screen: GitHubProviderScreen },
  FacebookProvider: { screen: FacebookProviderScreen }
}, {
  initialRouteName: 'Welcome',
  defaultNavigationOptions: {
    header: (props) => <CustomHeader {...props} />
  },
  transitionConfig
})

const AppNavigator = createStackNavigator({
  Dashboard: { screen: DashboardScreen },
  Repl: { screen: ReplScreen },
  File: { screen: FileScreen }
}, {
  initialRouteName: 'Dashboard',
  defaultNavigationOptions: {
    header: (props) => <CustomHeader {...props} />
    //     right={(
    //       <Appbar.Action
    //         icon='exit-to-app'
    //         onPress={async () => {
    //           await logOut()
    //           props.navigation.navigate('Auth')
    //         }}
    //       />
    //     )}
    //   />
    // )
  },
  transitionConfig
})

useScreens() // TODO: Look into broken autofill
const Navigator = createSwitchNavigator({
  Initial: InitialScreen,
  Auth: AuthNavigator,
  App: AppNavigator
}, { initialRouteName: 'Initial' })
const App = createAppContainer(Navigator)

export default () => (
  <PaperProvider>
    <StatusBar barStyle='light-content' />
    <App />
  </PaperProvider>
)