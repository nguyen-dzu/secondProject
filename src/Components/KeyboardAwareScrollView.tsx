import React from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

export default function (props: KeyboardAwareScrollViewProps) {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      extraHeight={200}
      {...props}
    />
  );
}
