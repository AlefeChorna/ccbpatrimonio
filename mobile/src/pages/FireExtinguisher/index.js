import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import styles from './styles';

class FireExtinguisher extends Component {
  state={
    data: []
  }

  _renderContentNoItems = () => (
    <View style={styles.containerNoItems}>
      <Image
        source={require('../../assets/fire-extinguisher.png')}
        style={styles.imageNoItems}
        resizeMode="contain" />
      <Text style={styles.textNoItems}>Nenhum extintor cadastrado</Text>
    </View>
  )

  _renderContent = () => (
    <View></View>
  )

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Extintores" showIconSearch />

        { data.length > 0 ? this._renderContent() : this._renderContentNoItems() }

        <View style={styles.containerButtonAdd}>
          <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.navigation.navigate('AddFireExtinguisher')}>
            <IconMaterial name="plus" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FireExtinguisher.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="fire-extinguisher" color={tintColor} size={21} />,
  tabBarLabel: ({ tintColor }) => (
    <View style={styles.tabBarLabel}>
      <Text style={{ color: tintColor, fontSize: 12 }}>Extintores</Text>
    </View>
  )
}

export default FireExtinguisher;

