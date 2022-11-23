/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {widthScreen} from '../Screens/ConfigButton';
import Text from './Text';
import Icon from 'react-native-vector-icons/AntDesign';
export default function ResultButton({buttonValue}: {buttonValue?: any}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${
          buttonValue.backgroundColor ? buttonValue.backgroundColor : null
        }`,
        width:
          buttonValue.widthStyle == 'Dynamic'
            ? widthScreen
            : buttonValue.buttonWidth,
        height:
          buttonValue.heightStyle == 'Dynamic' ? 56 : buttonValue.buttonHeight,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderStyle: buttonValue.borderType
          ? buttonValue.borderType
          : undefined,
        borderWidth:
          buttonValue.border == 'no' ? undefined : buttonValue.borderWidth,
        borderColor: buttonValue.borderColor,
        borderRadius: buttonValue.borderRadius,
      }}>
      <Icon name="down" size={24} color={buttonValue.buttonTextColor} />
      <Text
        style={{
          color: `${buttonValue.buttonTextColor}`,
          textAlign: 'center',
          fontSize: 16,
        }}>
        {buttonValue.buttonText}
      </Text>
      <Icon name="down" size={24} color={buttonValue.buttonTextColor} />
    </TouchableOpacity>
  );
}
