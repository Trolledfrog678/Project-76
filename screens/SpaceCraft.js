import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>SpaceCraft Screen!</Text>
            </View>
        )
    }
}

function App() {
   return  (
      <NavigationContainer>
        <Stack.Navigatior> initalRouteName="Home" screenOptions={{
           headShown: false
        }}
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
           <Stack.Screen name="DailyPic" component={DailyPicScreen} />
           <Stack.Screen name="StarMap" component={StartMapScrenn} />
          </Stack.Navigatior>
       </NavigationContainer>
   );
    }