import React, {useRef} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../Config';
import Style from '../Config/Style';
import Text from './Text';

export default function ({
  label,
  error,
  touched,
  containerStyle,
  style,
  icon,
  extraData,
  extraData1,
  backgroundColorIcon,
  size = 'medium',
  ...others
}: TextInput['props'] & {
  label?: string;
  error?: string;
  touched?: boolean;
  containerStyle?: View['props']['style'];
  icon?: React.ComponentProps<typeof Icon>['name'];
  extraData?: any;
  extraData1?: any;
  backgroundColorIcon?: any;
  size?: 'medium' | 'small';
}) {
  const ref = useRef<TextInput>(null);
  const hasError = error && touched;
  const success = touched && !hasError;
  return (
    <View style={[Style.mb, containerStyle]}>
      {label ? <Text style={[Style.title, Style.mb]}>{label}</Text> : null}

      <Pressable
        style={[
          styles.input,
          size === 'small' && styles.inputSmall,
          success && styles.inputSuccess,
          hasError ? styles.inputError : null,
          others.multiline && {height: 90},
          style,
        ]}
        onPress={() => ref.current?.focus()}>
        {icon && (
          <Icon
            name={icon}
            color={
              backgroundColorIcon
                ? backgroundColorIcon == '#ffffff'
                  ? '#999999'
                  : backgroundColorIcon
                : '#999999'
            }
            size={21}
            style={{
              position: 'absolute',
              right: 0,
              top: 9,
              marginRight: 10,
              backgroundColor: `${backgroundColorIcon}`,
            }}
          />
        )}
        {extraData}
        <TextInput
          ref={ref}
          {...others}
          style={{
            fontSize: 16,
            color: Colors.black,
            flex: 1,
          }}
          returnKeyType={
            others.keyboardType === 'number-pad' ||
            others.keyboardType === 'numeric'
              ? 'done'
              : 'default'
          }
          placeholderTextColor={Colors.gray3}
        />
        <Text>{extraData1}</Text>
      </Pressable>

      {hasError ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: Colors.gray4,
    // backgroundColor: '#F8F8F8',
  },
  inputSmall: {
    height: 40,
  },
  inputSuccess: {
    borderColor: Colors.primary,
  },
  inputError: {
    borderColor: Colors.error,
  },
  error: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 8,
  },
});
