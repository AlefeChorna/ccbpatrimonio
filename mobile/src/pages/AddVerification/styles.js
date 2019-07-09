import { StyleSheet } from 'react-native';

import { colors } from '../../styles';
const barCodeReaderHeight = 350;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    height: 70,
    justifyContent: 'center'
  },
  activityIndicator: {
    color: colors.themeColor
  },
  containerBarCode: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  subContainerBarCode: {
    height: 110,
    width: '100%',
    backgroundColor: colors.darkTransparent,
  },
  subContanierBarCodeCenter: {
    flex: 1,
    flexDirection: 'column',
  },
  containerReader: {
    height: 53,
    width: '100%',
    flexDirection: 'row',
  },
  containerReaderCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonAdd: {
    width: '100%',
    height: 80,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  buttonAdd: {
    backgroundColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: 55,
    height: 55,
    borderRadius: 35,
    elevation: 5,
  },
  viewBarCode: {
    height: barCodeReaderHeight,
  },
  barcodeScanner: {
    flex: 1,
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

export default styles;
