import {Dimensions, StyleSheet} from 'react-native';
import * as React from 'react';
import {
  AddIcon,
  Box,
  Button,
  Center,
  ChevronLeftIcon,
  ChevronRightIcon,
  Fab,
  HStack,
  Skeleton,
  Text,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProgressChart} from 'react-native-chart-kit';
import {chartDataType} from './home.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {goCreateTransaction} from './funtions';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const [working, setWorking] = React.useState(true);
  const data = {
    labels: ['Ingresos', 'Gastos'], // optional
    data: [0.4, 0.6],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      padding: 15,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  if (working) {
    return (
      <SafeAreaView style={styles.container}>
        <Center w="100%">
          <VStack
            w="90%"
            maxW="400"
            borderWidth="1"
            space={6}
            rounded="md"
            alignItems="center"
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}>
            <Skeleton h="40" />
            <Skeleton.Text />
          </VStack>
        </Center>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Center>
        <HStack space={15} justifyContent="center" alignItems={'center'}>
          <Button leftIcon={<ChevronLeftIcon />} variant={'ghost'} />
          <Text fontSize={'lg'}>{new Date().getMonth()}</Text>
          <Button rightIcon={<ChevronRightIcon />} variant={'ghost'} />
        </HStack>

        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </Center>
      <Fab
        placement="bottom-right"
        renderInPortal={false}
        shadow={2}
        icon={<AddIcon />}
        onPress={() => goCreateTransaction(navigation)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
});
export default HomeScreen;
