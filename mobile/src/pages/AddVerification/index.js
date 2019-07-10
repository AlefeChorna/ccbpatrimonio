import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ActivityIndicator,
  Animated,
  BackHandler,
  InteractionManager
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BarcodeScanner from 'react-native-scan-barcode';

import Header from '../../components/Header';

import styles from './styles';

export default class AddVerification extends Component {
  constructor(props) {
    super(props);

    this.barCodeReaderHeightAnimated = new Animated.Value(styles.viewBarCode.height);
  }

  state = {
    data: [],
    torchMode: 'off',
    cameraType: 'back',
    content: '',
    expandedBarCode: true,
    loading: true,
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
      <View style={styles.containerBarCode}>
        <View style={styles.subContainerBarCode} />
        <View style={styles.subContanierBarCodeCenter}>

          { /* Desenho do leitor de código de barras Top */ }
          <View style={styles.containerReader}>
            <View style={{ marginLeft: 20, justifyContent: 'flex-end' }}>
              <View style={{ width: 35, height: 6, backgroundColor: 'white', }} />
              <View style={{ width: 6, height: 38, backgroundColor: 'white', }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginRight: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <View style={{ width: 35, height: 6, backgroundColor: 'white', }} />
              <View style={{ width: 6, height: 38, backgroundColor: 'white', }} />
            </View>
          </View>
          { /* Desenho do leitor de código de barras Center */ }
          <View style={styles.containerReaderCenter}>
            <View style={{ width: 275, height: 3, backgroundColor: 'white' }} />
          </View>
          { /* Desenho do leitor de código de barras Bottom */ }
          <View style={styles.containerReader}>
            <View style={{ marginLeft: 20 }}>
              <View style={{ width: 6, height: 38, backgroundColor: 'white', }} />
              <View style={{ width: 35, height: 6, backgroundColor: 'white', }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginRight: 20, alignItems: 'flex-end' }}>
              <View style={{ width: 6, height: 38, backgroundColor: 'white', }} />
              <View style={{ width: 35, height: 6, backgroundColor: 'white', }} />
            </View>
          </View>

        </View>
        <View style={styles.subContainerBarCode} />
      </View>
    );
  }

  _renderContentNoItems = () => (
    <View style={styles.containerNoItems}>
      <Image
        source={require('../../assets/no-items-added.png')}
        style={styles.imageNoItems}
        resizeMode="contain" />
      <Text style={styles.textNoItems}>Nenhum ativo adicionado</Text>
    </View>
  );

  _renderContentItems = () => (
    <View style={styles.viewContent}>
      <Text>{this.state.content}</Text>
    </View>
  )

  _toogleBarCodeScanner = () => {
    const { expandedBarCode } = this.state;

    Animated.timing(this.barCodeReaderHeightAnimated, {
      toValue: expandedBarCode ? 0 : styles.viewBarCode.height,
      duration: 450
    }).start(() => {
      InteractionManager.runAfterInteractions(() => {
        this.setState({ expandedBarCode: !expandedBarCode });
      });
    });
  }

  _renderContent = () => {
    const { expandedBarCode, data } = this.state;

    return (
      <>
        <Animated.View style={{ height: this.barCodeReaderHeightAnimated }}>
          <BarcodeScanner
            onBarCodeRead={this.barcodeReceived}
            showViewFinder={false}
            style={styles.barcodeScanner}
            children={this.maskLoaderBarCode()}
            torchMode={this.state.torchMode}
            cameraType={this.state.cameraType} />
        </Animated.View>
        { (data.length === 0)
          ? this._renderContentNoItems()
          : this._renderContentItems()
        }
        <View style={styles.containerButtonAdd}>
          <TouchableOpacity style={styles.buttonAdd} onPress={() => this._toogleBarCodeScanner()}>
            <Icon name={expandedBarCode ? "arrow-up" :  "arrow-down"} size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  _renderLoading = () => (
    <View style={styles.containerLoading}>
      <ActivityIndicator color={styles.activityIndicator.color} size={38} />
    </View>
  );

  _backHandlerEvent = () => {
    const { expandedBarCode } = this.state;

    if (expandedBarCode) {
      /**
       * Desativa a câmera do celular para que a transição de volta
       * para a tabBar do App seja suave
       */
      this.setState({ loading: true });

      return false;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    if(this.backHandler) this.backHandler.remove();
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this._backHandlerEvent
      );
      setTimeout(() => this.setState({ loading: false }), 500);
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Adicionar Verificação" showIconSearch showIconClose />
        {loading
          ? this._renderLoading()
          : this._renderContent()
        }
      </View>
    );
  }
}
