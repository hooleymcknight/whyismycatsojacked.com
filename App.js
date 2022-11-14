import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import * as Font from 'expo-font'
import { useFonts } from '@use-expo/font'
import AppLoading from 'expo-app-loading'
// upgrade to splash screen soon! appLoading is deprecated
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// import * as SplashScreen from 'expo-splash-screen'

import Home from './components/home/Home'
import Pet from './components/pets/Pet'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Pets!'
      })
    },
    Pet: {
      screen: Pet,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.name
      })
    },
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(RootStack)
const customFonts = {
  'Nunito': require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
  'NunitoItalic': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf')
}

const App = () => {
  const [isLoaded] = useFonts(customFonts)

  if (!isLoaded) {
    return <AppLoading />
  }

  return (
    <AppContainer />
  )
}

export default App