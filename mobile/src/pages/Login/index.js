import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  StatusBar,
  TextInput
} from 'react-native';

import GradientButton from '../../components/GradientButton';

import styles from './styles';

const Login = () => (
  <ImageBackground
    source={require('../../assets/background.png')}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.logo}>
        <Image
          source={require('../../assets/icon.png')}
          style={{ width: 121, height: 121 }}
          resizeMode="cover" />
      </View>
      <TextInput
        placeholder="Informe seu usuário"
        autoCapitalize="none"
        returnKeyType="next"
        maxLength={40}
        blurOnSubmit={false}
        onSubmitEditing={() => this.password.focus()}
        style={styles.input} />

      <TextInput
        ref={input => this.password = input}
        autoCapitalize="none"
        returnKeyType="go"
        maxLength={40}
        placeholder="Informe sua senha"
        secureTextEntry
        style={styles.input} />

      <GradientButton
        gradientProps={{
            start: { x: 0, y: 0},
            end: { x: 1, y: 0},
            colors: ["#E1467C", "#255284"]
        }}
        styleButton={styles.button}
        styleButtonText={styles.buttonText}
        textButton="Entrar" />
  </ImageBackground>
);

export default Login;
