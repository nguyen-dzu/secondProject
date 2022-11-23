import React from 'react';
import {Text} from 'react-native';
import Style from '../Config/Style';

export default function ({style, ...others}: Text['props']) {
  return <Text style={[Style.textDefault, style]} {...others} />;
}
