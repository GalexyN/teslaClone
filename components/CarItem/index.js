import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/index';
import styles from './styles';

const CarItem = ({ name, subtitle, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
          <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
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
