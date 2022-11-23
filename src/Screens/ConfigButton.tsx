import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';

import {KeyboardAwareScrollView, SafeAreaView, TextInput} from '../Components';
import ResultButton from '../Components/ResultButton';
import Colors from '../Config/Colors';
import Style from '../Config/Style';
import {actions} from '../redux';
export const buttonWidth = ['Dynamic', 'fixed'];
export const buttonHeight = ['Dynamic', 'fixed'];
export const borderButton = ['yes', 'no'];
export const borderStyle = ['solid', 'dashed'];
export const widthScreen = Dimensions.get('window').width;
export default function ConfigButton() {
  const dispatch = useDispatch();
  const [buttonValue, setButtonValue] = useState({
    buttonText: '',
    buttonTextColor: '',
    backgroundColor: '',
    widthStyle: '',
    heightStyle: '',
    buttonWidth: widthScreen,
    buttonHeight: 56,
    border: '',
    borderType: undefined,
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '',
  });
  const handelAddButton = () => {
    dispatch(actions.formActions.setValue(buttonValue));
  };
  return (
    <SafeAreaView>
      <View style={[Style.rowBetween, styles.container]}>
        <Text style={Style.h1}>Button Setting</Text>
        <TouchableOpacity onPress={() => handelAddButton()}>
          <Text style={Style.title}>Create</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView style={styles.container}>
        <TextInput
          onChangeText={(value: any) =>
            setButtonValue(prev => ({...prev, buttonText: value}))
          }
          placeholder={'input button text'}
          label={'Button Text'}
        />
        <TextInput
          placeholder="#000000"
          label="Button Text color"
          icon="square"
          onChangeText={(value: any) =>
            setButtonValue(prev => ({...prev, buttonTextColor: value}))
          }
          backgroundColorIcon={
            buttonValue.buttonTextColor
              ? buttonValue.buttonTextColor
              : undefined
          }
        />
        <TextInput
          placeholder="#000000"
          label="Background Color"
          icon="square"
          onChangeText={(value: any) =>
            setButtonValue(prev => ({...prev, backgroundColor: value}))
          }
          backgroundColorIcon={
            buttonValue.backgroundColor
              ? buttonValue.backgroundColor
              : undefined
          }
        />

        <Text style={[Style.title, Style.mb]}>Button Width</Text>
        <View style={Style.row}>
          <SelectDropdown
            data={buttonWidth}
            onSelect={selectedItem => {
              setButtonValue(prev => ({...prev, widthStyle: selectedItem}));
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
            buttonStyle={styles.drowdown}
            dropdownIconPosition={'left'}
            defaultValue={buttonWidth[0]}
          />
          {buttonValue.widthStyle == 'fixed' ? (
            <TextInput
              extraData1="px"
              onChangeText={(value: any) =>
                setButtonValue(prev => ({
                  ...prev,
                  buttonWidth: Number(value),
                }))
              }
              keyboardType="number-pad"
              style={{width: widthScreen * 0.54, borderRightWidth: 0}}
            />
          ) : null}
        </View>

        <Text style={[Style.title, Style.my]}>Button height</Text>

        <View style={Style.row}>
          <SelectDropdown
            data={buttonHeight}
            onSelect={selectedItem => {
              setButtonValue(prev => ({...prev, heightStyle: selectedItem}));
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
            buttonStyle={styles.drowdown}
            dropdownIconPosition={'left'}
            defaultValue={buttonHeight[0]}
          />
          {buttonValue.heightStyle == 'fixed' ? (
            <TextInput
              defaultValue="56"
              extraData1="px"
              onChangeText={(value: any) =>
                setButtonValue(prev => ({
                  ...prev,
                  buttonHeight: Number(value),
                }))
              }
              style={{width: widthScreen * 0.54, borderRightWidth: 0}}
            />
          ) : null}
        </View>

        <Text style={[Style.title, Style.my]}>Border</Text>
        <View style={Style.row}>
          <View style={Style.row}>
            <SelectDropdown
              data={borderButton}
              onSelect={selectedItem => {
                setButtonValue(prev => ({...prev, border: selectedItem}));
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem;
              }}
              rowTextForSelection={item => {
                return item;
              }}
              buttonStyle={styles.borderButton}
              dropdownIconPosition={'left'}
              defaultValue={borderButton[1]}
            />
            {buttonValue.border == 'yes' ? (
              <>
                <SelectDropdown
                  data={borderStyle}
                  onSelect={selectedItem => {
                    setButtonValue(prev => ({
                      ...prev,
                      borderType: selectedItem,
                    }));
                  }}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                  buttonStyle={styles.borderButton}
                  dropdownIconPosition={'left'}
                  defaultValue={borderStyle[0]}
                />
                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  extraData1="px"
                  onChangeText={(value: any) =>
                    setButtonValue(prev => ({
                      ...prev,
                      borderWidth: Number(value),
                    }))
                  }
                  style={{width: widthScreen * 0.3, borderRightWidth: 0}}
                />
              </>
            ) : null}
          </View>
        </View>
        <TextInput
          label="border radius"
          placeholder="input border radius"
          onChangeText={(value: any) =>
            setButtonValue(prev => ({
              ...prev,
              borderRadius: Number(value),
            }))
          }
        />
        <TextInput
          label="Border Color"
          placeholder="#000000"
          icon="square"
          onChangeText={(value: any) =>
            setButtonValue(prev => ({
              ...prev,
              borderColor: value,
            }))
          }
          backgroundColorIcon={
            buttonValue.borderColor ? buttonValue.borderColor : undefined
          }
        />
      </KeyboardAwareScrollView>
      <ScrollView
        style={styles.result}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text style={[Style.title, Style.mb]}>Result</Text>
        <ResultButton buttonValue={buttonValue} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textInput: {
    marginVertical: 5,
    fontSize: 18,
    color: '#000000',
  },
  drowdown: {
    ...Style.border,
    height: 48,
    backgroundColor: Colors.background,
    width: widthScreen * 0.4,
  },
  result: {
    backgroundColor: '#f1f1f1',
    height: 300,
    width: widthScreen,
  },
  borderButton: {
    ...Style.border,
    height: 48,
    backgroundColor: Colors.background,
    width: widthScreen * 0.3,
  },
});
