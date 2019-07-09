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
  tabBarLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2
  },
});

export default styles;
