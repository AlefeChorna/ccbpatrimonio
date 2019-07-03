import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ styleButton, buttonProps, gradientProps, styleButtonText, textButton }) => (
    <LinearGradient 
        { ...gradientProps ? { ...gradientProps } : {} }
        style={styleButton}>
        <TouchableOpacity 
            style={{ ...styleButton, marginTop: 0, backgroundColor: "transparent" }}
            { ...buttonProps ? { ...buttonProps } : {} }>
        
            <Text style={styleButtonText}>{textButton}</Text>
        </TouchableOpacity>
    </LinearGradient>
);

export default GradientButton;