import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import styles from './styles';

class Products extends Component {
  state={
    data: []
  }

  _renderContentNoItems = () => (
    <View style={styles.containerNoItems}>
      <Image
        source={require('../../assets/products.png')}
        style={styles.imageNoItems}
        resizeMode="contain" />
      <Text style={styles.textNoItems}>Nenhum ativo listado</Text>
    </View>
  )

  _renderContent = () => (
    <View></View>
  )

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Ativos Imobilizado" showIconSearch />

        { data.length > 0 ? this._renderContent() : this._renderContentNoItems() }
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
