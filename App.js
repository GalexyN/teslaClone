import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model S'}
        subtitle={'Starts at 69,420'}
        image={require('./assets/images/ModelS.jpeg')}
      />
      <CarItem
        name={'Model X'}
        subtitle={'Order Online For '}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/ModelX.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
