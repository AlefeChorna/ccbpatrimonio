import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 50 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  containerButton: {
    width: 55,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    width: 60,
  }
});

export default styles;
