/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';

import {setupPlayer, addTrack} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer';



 

function App(): JSX.Element {
  
const [playerReady, setPlayerReady] = useState(false)
  
async function setup(){
  let isSetup = await setupPlayer()
  if(isSetup){
    await addTrack()
  }
setPlayerReady(isSetup)
}

useEffect(() =>{
setup()
}, [])

if(!playerReady){
  return (
  <SafeAreaView>
    <ActivityIndicator />
  </SafeAreaView>
  )
}

  return (
    <View >
      <StatusBar
        barStyle={'light-content'}
      />
      
      <MusicPlayer />
      
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1
 }
});

export default App;
