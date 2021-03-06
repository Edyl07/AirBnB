/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

// import HomeScreen from './src/screens/Home/Index';
import Post from './src/components/Post/Index'



const App: () => Node = () => {


  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          <Post />
      </SafeAreaView>
    </>
  );
};



export default App;
