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
  extinguisherPhotoContainer: {
    maxHeight: 250,
    marginTop: 20
  },
  standardExtinguisherImage: {
    paddingVertical: 30,
    width: metrics.screenWidth - (metrics.basePadding * 2),
    height: 250,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.05)',
    opacity: 0.9,
    borderWidth: 6,
  },
  secundaryExtinguisherImage: {
    paddingVertical: 30,
    width: 160,
    height: 160,
    borderRadius: 80,
    opacity: 0.7,
    borderWidth: 6,
  }
});

export default styles;;
