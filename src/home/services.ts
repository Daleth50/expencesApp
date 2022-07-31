import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DashboardServices = {
  fetchDashboardData: () => {
    return async () => {
      setTimeout(async () => {
        await [0.4, 0.6];
      }, 1000);
    };
  },
};

const handleError = (
  error: any,
  navigation?: NativeStackNavigationProp<any>,
) => {
  if (error.status === 401) {
    navigation?.navigate('Home');
  }
};

export default DashboardServices;
