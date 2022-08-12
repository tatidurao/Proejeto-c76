import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


//import { createNavigator } from '@react-navigation/stack';
//import { createStackNavigator } from '@react-navigation/stack';
//import { Navigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
         {/*Ao descomentar retire as chaves em volta da linha*/}

         {/* <Stack name="Home" component={HomeScreen} />*/}
         {/* <Stack.Screen name="Home" component={HomeScreen} />*/}
         {/* <Stack.Screen componente="Home" name={HomeScreen} />*/}


        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;