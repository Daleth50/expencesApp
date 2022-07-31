import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import * as React from 'react';

export const goCreateTransaction = (
  navigation: NativeStackNavigationProp<any>,
) => {
  navigation.navigate('AddTransactionScreen');
};
