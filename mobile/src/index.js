import React, { Component } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import BarcodeScanner from 'react-native-scan-barcode';

export default class App extends Component {
  state = {
    torchMode: 'on',
    cameraType: 'back',
    content: '',
  }

  barcodeReceived = (e) => {
    this.setState({ content: e.data });

    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }

  async componentDidMount() {
    const rp = await 
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  }

  maskLoaderBarCode() {
    return (
      <View style={{
         height: 200, 
         justifyContent: 'center',
         alignItems: 'center' 
        }}>
        <View style={{ height: 2, width: 320, backgroundColor: 'red' }} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBarCode}>
          <BarcodeScanner
            onBarCodeRead={this.barcodeReceived}
            showViewFinder={false}
            style={{ flex: 1 }}
            children={this.maskLoaderBarCode()}
            torchMode={this.state.torchMode}
            cameraType={this.state.cameraType} />
        </View>
        <View style={styles.viewContent}>
          <Text>{this.state.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBarCode: {
    height: 200,
    backgroundColor: 'red',
  },
  viewContent: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
