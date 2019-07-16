import React, { Component } from 'react';
import {
  View,
  Vibration,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Animated,
  BackHandler,
  InteractionManager
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BarcodeScanner from 'react-native-scan-barcode';
import Torch from 'react-native-torch';
import { WaveIndicator } from 'react-native-indicators';

import { SCLAlert, SCLAlertButton } from '../../components/SweetAlert';
import Header from '../../components/Header';

import { colors } from '../../styles';

import styles from './styles';

export default class AddItemsVerification extends Component {
  constructor(props) {
    super(props);

    this.barCodeReaderHeightAnimated = new Animated.Value(styles.viewBarCode.height);
  }

  state = {
    data: [],
    showMessageInfo: false,
    torchMode: 'off',
    scannerColor: 'white',
    cameraType: 'back',
    scannerContent: '',
    expandedBarCode: true,
    enableNextScanner: true,
    loading: true,
    viewExit: false,
  }

  barcodeReceived = async (e) => {
    const { enableNextScanner } = this.state;

    if (!enableNextScanner) return;

    await this.setState({
      enableNextScanner: false,
      scannerContent: e.data,
      scannerColor: '#9DCA83',
    });

    this._addItemToVerification();
  }

  _codeHasAlreadyInserted = () => {
    const { data, scannerContent } = this.state;

    let found = false;
    data.every(code => {
      if (code === scannerContent) found = true;

      return !found;
    });

    return found;
  }

  _toogleMessageInfo = () => {
    const { showMessageInfo } = this.state;

    this.setState({ showMessageInfo: !showMessageInfo });
  }

  _enableScanner = () => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        this.setState({
          enableNextScanner: true,
          scannerColor: 'white'
        });
      }, 1500);
    });
  }

  _addItemToVerification = async () => {
    const { data, scannerContent } = this.state;

    const PATTERN = [50, 200, 50, 200];
    Vibration.vibrate(PATTERN);

    if (this._codeHasAlreadyInserted()) {
      this._toogleMessageInfo();
    } else {
      await this.setState({ data: [ scannerContent, ...data] });
    }

    this._enableScanner();
  }

  maskLoaderBarCode() {
    const { scannerColor } = this.state;

    return (
      <View style={styles.containerBarCode}>
        <View style={styles.subContainerBarCode} />
        <View style={styles.subContanierBarCodeCenter}>

          { /* Desenho do leitor de código de barras Top */ }
          <View style={styles.containerReader}>
            <View style={{ marginLeft: 20, justifyContent: 'flex-end' }}>
              <View style={{ width: 35, height: 6, backgroundColor: scannerColor, }} />
              <View style={{ width: 6, height: 38, backgroundColor: scannerColor, }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginRight: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <View style={{ width: 35, height: 6, backgroundColor: scannerColor, }} />
              <View style={{ width: 6, height: 38, backgroundColor: scannerColor, }} />
            </View>
          </View>
          { /* Desenho do leitor de código de barras Center */ }
          <View style={styles.containerReaderCenter}>
            <View style={{ width: 275, height: 3, backgroundColor: scannerColor }} />
          </View>
          { /* Desenho do leitor de código de barras Bottom */ }
          <View style={styles.containerReader}>
            <View style={{ marginLeft: 20 }}>
              <View style={{ width: 6, height: 38, backgroundColor: scannerColor, }} />
              <View style={{ width: 35, height: 6, backgroundColor: scannerColor, }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginRight: 20, alignItems: 'flex-end' }}>
              <View style={{ width: 6, height: 38, backgroundColor: scannerColor, }} />
              <View style={{ width: 35, height: 6, backgroundColor: scannerColor, }} />
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
      <Text>{this.state.scannerContent}</Text>
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

  _renderLoading = () => <WaveIndicator color={colors.themeColor} size={75} />

  _goBack = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  }

  _backHandlerEvent = () => {
    const { expandedBarCode } = this.state;

    if (expandedBarCode) {
      /**
       * Desativa a câmera do celular para que a transição de volta
       * para a tabBar do App seja suave
       */
      this.setState({ viewExit: true });
    }

    setTimeout(() => {
      this._goBack();
    }, 280);

    return true;
  }

  componentWillUnmount() {
    if(this.backHandler) this.backHandler.remove();
  }

  async componentDidMount() {
    const rp = await
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    //Torch.switchState(true);

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this._backHandlerEvent
    );

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2400);
  }

  render() {
    const {
      loading,
      viewExit,
      showMessageInfo,
      scannerContent
    } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title="Adicionar Ativos"
          showIconSearch
          animatedSearch={false}
          showIconClose
          onClose={() => this.props.navigation.navigate('Main')}/>

        {loading
          ? this._renderLoading()
          : viewExit ? <View /> : this._renderContent()
        }

        <SCLAlert
          theme="info"
          show={showMessageInfo}
          title="Atenção"
          onRequestClose={() => {}}
          subtitle={`Código ${scannerContent} já inserido`}
        >
          <SCLAlertButton theme="info" onPress={this._toogleMessageInfo}>OK</SCLAlertButton>
        </SCLAlert>
      </View>
    );
  }
}
