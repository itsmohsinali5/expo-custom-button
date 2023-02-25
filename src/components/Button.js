import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const CustomButton = ({ leftIcon, text, fontSize, fontWeight, rightIcon, onPress, TextColor, backgroundColor, borderRadius, width, type }) => {

    const renderLeftIcon = () => {
        if (leftIcon.uri) {
          return <Image source={{ uri: leftIcon.uri }} style={styles.icon} />;
        } else {
          return <Image source={leftIcon} style={styles.icon} />;
        }
      };
    
      const renderRightIcon = () => {
        if (rightIcon.uri) {
          return <Image source={{ uri: rightIcon.uri }} style={styles.icon} />;
        } else {
          return <Image source={rightIcon} style={styles.icon} />;
        }
      };
    
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, backgroundColor: backgroundColor ? backgroundColor : 'lightblue', borderRadius: borderRadius ? borderRadius : '5px', width: width ? width : 'auto', justifyContent: rightIcon && leftIcon ? 'space-between' : 'center' }}>
      {leftIcon && renderLeftIcon()}
      <Text style={{...styles.text, fontSize: fontSize ? fontSize : 16, fontWeight: fontWeight ? fontWeight : 'bold', color: TextColor ? TextColor : 'black'}}>{text}</Text>
      {rightIcon && renderRightIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default CustomButton;