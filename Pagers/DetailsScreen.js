/* import { View, Text, Button } from 'react-native'
import React from 'react'

 const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title='Go TO Details Screen'
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
    

export default function DetailsScreen(); */ 

import { View, Text } from 'react-native'
import React from 'react'

export default function DetailsScreen() {
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}