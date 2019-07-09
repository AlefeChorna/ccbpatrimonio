import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import styles from './styles';

class Products extends Component {
  render() {
    return (
      <View>
        <Header title="Ativos Imobilizado" showIconSearch />
      </View>
    );
  }
}

Products.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="barcode" color={tintColor} size={31} />,
  tabBarLabel: ({ tintColor }) => (
    <View style={styles.tabBarLabel}>
      <Text style={{ color: tintColor, fontSize: 12 }}>Ativos Imobilizado</Text>
    </View>
  )
}

export default Products;
