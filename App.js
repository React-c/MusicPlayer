/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';

import { homescreen } from './Screen/home';
import tabscreen from './Screen/TabScreen';
import MainPage from './Screen/MainScreen';
import PlayMusic from './Screen/PlayMusic';
import PlayerScreen from './Screen/MusicPlayer';
import signUp from './Screen/Signup';
import PlayerScreenforMusic from './Screen/PlaylistMusicPlayer';

 
 const Stack = createStackNavigator();
 
 function Navstack() {
   return (
     <Stack.Navigator initialRouteName="signUp">
        <Stack.Screen
         name="signUp"
         component={signUp}
         options={{headerShown:false}}></Stack.Screen>
    
       <Stack.Screen
         name="tab"
         component={tabscreen}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen
         name="home"
         component={homescreen}
         options={{headerShown:false}}></Stack.Screen>
        
           <Stack.Screen
         name="Main"
         component={MainPage}
         options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen
         name="PlayMusic"
         component={PlayMusic}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen
         name="PlayScreen"
         component={PlayerScreen}
         options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen
         name="PlayScreenformusic"
         component={PlayerScreenforMusic}
         options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
      
   );
 }
 
 export default function App() {
   return (
     <NavigationContainer>
       <Navstack></Navstack>
     </NavigationContainer>
   );
 }
 