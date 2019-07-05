import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    width: 125,
    height: 125,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lighter,
    marginBottom: 15,
  },
  logo: {
    width: 121,
    height: 121
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: colors.lighter,
    elevation: 1,
    borderRadius: 25,
    marginTop: 12,
    fontSize: metrics.fontSizeInput,
    paddingHorizontal: metrics.basePadding,
    borderColor: colors.light4,
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
    fontSize: metrics.fontSizeButton,
    fontFamily: 'Gill Sans',
    color: colors.white,
    backgroundColor: 'transparent',
  },
});

export default styles;
