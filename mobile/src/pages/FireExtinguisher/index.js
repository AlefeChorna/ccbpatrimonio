import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../../components/Header';

import styles from './styles';

class FireExtinguisher extends Component {
  render() {

    return (
      <View>
        <Header title="Extintores" showIconSearch />
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

