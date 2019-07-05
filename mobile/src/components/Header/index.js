import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({
  title,
  showIconClose,
  showIconSearch,
}) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

    <TouchableOpacity
      style={{ ...styles.containerButton, opacity: showIconClose ? 1 : 0 }}
      onPress={showIconClose ? () => alert('dsd') : null}
    >
      <Icon name="arrow-left" color="#FFF" size={28} />
    </TouchableOpacity>

    <View style={styles.containerContent}>
      <Text style={styles.title}>{title}</Text>
    </View>

    <TouchableOpacity
      style={{ ...styles.containerButton, opacity: showIconSearch ? 1 : 0 }}
      onPress={showIconSearch ? () => alert('dsd') : null}
    >
      <Icon name="magnify" color="#FFF" size={26} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showIconClose: PropTypes.bool,
  showIconSearch: PropTypes.bool,
}

export default Header;
