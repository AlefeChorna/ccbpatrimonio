import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import styles from './styles';

class Main extends Component {
  state={
    data: []
  }

  _renderContentNoItems = () => (
    <View style={styles.containerNoItems}>
      <Image
        source={require('../../assets/no-verifications.png')}
        style={styles.imageNoItems}
        resizeMode="contain" />
      <Text style={styles.textNoItems}>Nenhuma verificação realizada</Text>
    </View>
  )

  _renderContent = () => (
    <View></View>
  )

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Verificações" showIconSearch />

        { data.length > 0 ? this._renderContent() : this._renderContentNoItems() }

        <View style={styles.containerButtonAdd}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.props.navigation.navigate('AddVerification')}
          >
            <Icon name="plus" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Main.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="format-list-checks" color={tintColor} size={31} />,
  tabBarLabel: ({ tintColor }) => (
    <View style={styles.tabBarLabel}>
      <Text style={{ color: tintColor, fontSize: 12 }}>Verificações</Text>
    </View>
  )
}

export default Main;
