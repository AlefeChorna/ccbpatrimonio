import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

// import { Container } from './styles';

export default class AddFireExtinguisher extends Component {
  render() {
    return (
      <View>
        <Header title="Adicionar Extintor" showIconClose />
      </View>
    );
  }
}
