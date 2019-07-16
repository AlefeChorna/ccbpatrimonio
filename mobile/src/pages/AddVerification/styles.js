import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },
  labelColor: {
    color: colors.themeColor
  },
  containerButtonSave: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  buttonSave: {
    backgroundColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: 55,
    height: 55,
    borderRadius: 35,
    elevation: 5,
  },
});

export default styles;
