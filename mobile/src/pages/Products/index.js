import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View } from 'react-native';

// import { Container } from './styles';

class Products extends Component {
  render() {
    return <View />;
  }
}

Products.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="barcode" color={tintColor} size={31} />
}

export default Products;
