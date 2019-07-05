import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({
  gradientProps,
  buttonProps,
  contentButton,
  styleButtonText,
  textButton
}) => (
  <LinearGradient { ...gradientProps }>
    <TouchableOpacity
      { ...buttonProps }
      style={{ ...buttonProps.style, marginTop: 0, backgroundColor: "transparent" }}
    >
      { React.isValidElement(contentButton)
        ? contentButton
        : <Text style={styleButtonText}>{textButton}</Text>
      }
    </TouchableOpacity>
  </LinearGradient>
);

GradientButton.propTypes = {
  gradientProps: PropTypes.object.isRequired,
  buttonProps: PropTypes.object.isRequired,
  contentButton: PropTypes.object,
  styleButtonText: PropTypes.object,
  textButton: PropTypes.string
}

export default GradientButton;
