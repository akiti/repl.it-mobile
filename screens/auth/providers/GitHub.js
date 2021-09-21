import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import Theme from '../../../components/wrappers/Theme'

const Screen = () => (
  <Theme>
    <View>
      <Text>Yeet! GitHub login isn't implemented yet :smirk:</Text>
    </View>
  </Theme>
)

Screen.navigationOptions = {
  title: 'GitHub Login'
}

export default Screen
