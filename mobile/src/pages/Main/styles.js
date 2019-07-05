import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNoItems: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  imageNoItems: {
    width: 110,
    height: 110,
    opacity: 0.5
  },
  textNoItems: {
    color: colors.regular,
    marginTop: metrics.baseMargin + 5,
    fontSize: metrics.fontSizeText,
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
  }
});

export default styles;
