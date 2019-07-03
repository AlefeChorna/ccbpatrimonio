import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TextInput
} from 'react-native';

import GradientButton from '../../components/GradientButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: { 
        width: 125, 
        height: 125,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEE',
        marginBottom: 15,
    },
    input: {
        width: 300,
        height: 45,
        backgroundColor: '#EEE',
        elevation: 1,
        borderRadius: 25,
        marginTop: 12,
        fontSize: 16,
        paddingHorizontal: 20,
        borderColor: '#AAA',
        borderWidth: 0.3
    },
    button: { 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 300, 
        height: 45,
        elevation: 0.5,
        marginTop: 12,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Gill Sans',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

const Main = () => (
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

export default Main;
