/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import AppNavigation from './navigation/appNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
