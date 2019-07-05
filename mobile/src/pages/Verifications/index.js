import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

// import { Container } from './styles';

class Verifications extends Component {
  render() {
    return <View />;
  }
}

Verifications.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="printer" color={tintColor} size={31} />
}

export default Verifications;
