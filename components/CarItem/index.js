import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/index';
import styles from './styles';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type={'primary'}
          content={'Custom Order'}
          onPress={() => console.warn('Pressed Custom Order')}
        />
        <StyledButton
          type={'secondary'}
          content={'Existing Inventory'}
          onPress={() => console.warn('Pressed Existing Inventory')}
        />
      </View>
    </View>
  );
};

export default CarItem;
