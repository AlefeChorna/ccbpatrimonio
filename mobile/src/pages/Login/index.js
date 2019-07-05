import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
  ActivityIndicator
} from 'react-native';

import GradientButton from '../../components/GradientButton';

import styles from './styles';

export default class Login extends Component {
  state={
    username: '',
    password: '',
    loading: false,
  }

  _handlerCheckUserExist = () => {
    this.setState({ loading: !this.state.loading });

    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 1000);
  }

  _contentButtonEnter = () => {
    const { loading } = this.state;

    const text = <Text style={styles.buttonText}>Entrar</Text>;
    const activityIndicator = <ActivityIndicator size={30} color="#FFF" />;

    return loading ? activityIndicator : text;
  }

  render() {
    const {
      username,
      password
    } = this.state;

    return (
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
          <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/icon.png')}
              style={styles.logo}
              resizeMode="cover" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Informe seu usuário"
            maxLength={40}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            value={username}
            onChangeText={text => this.setState({ username: text })}
            onSubmitEditing={() => this.password.focus()} />

          <TextInput
            style={styles.input}
            ref={input => this.password = input}
            autoCapitalize="none"
            maxLength={40}
            returnKeyType="go"
            placeholder="Informe sua senha"
            secureTextEntry
            value={password}
            onChangeText={text => this.setState({ password: text })}
            onSubmitEditing={this._handlerCheckUserExist} />

          <GradientButton
            gradientProps={{
                start: { x: 0, y: 0},
                end: { x: 1, y: 0},
                colors: ["#E1467C", "#255284"],
                style: styles.button
            }}
            buttonProps={{
              style: styles.button,
              onPress: () => this._handlerCheckUserExist()
            }}
            contentButton={this._contentButtonEnter()} />
      </ImageBackground>
    );
  }
};
