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
  },
  containerSearch: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchContainerMarginLeft: {
    marginLeft: metrics.screenWidth
  },
  inputSearch: {
    paddingTop: 0,
    paddingBottom: 0,
    width: metrics.screenWidth - 70,
    paddingHorizontal: metrics.basePadding / 2,
    color: 'white',
    backgroundColor: colors.whiteTransparent,
    borderRadius: metrics.baseRadius + 3,
    height: 35,
  },
  selectionColor: {
    color: colors.themeColor
  },
  buttonDelete: {
    height: 50,
    width: 40,
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
