import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/home';
import {AddIcon, Icon, View} from 'native-base';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Mis gastos',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
