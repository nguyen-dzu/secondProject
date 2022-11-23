import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Text, TextInput} from '../Components';
import {filterButton} from '../Components/FillterButtons';
import ResultButton from '../Components/ResultButton';
import {Colors} from '../Config';
import Style from '../Config/Style';
import {widthScreen} from './ConfigButton';
import {DataFiller} from './data';

export default function () {
  const {valueButton} = useSelector((state: any) => state.form);
  const [search, setSearch] = useState('');
  const [listButtons, setListButtons] = useState([]);
  const [reRenderItem, setReRenderItem] = useState([]);

  useEffect(() => {
    setReRenderItem(valueButton);
    setListButtons(valueButton);
  }, [valueButton]);

  const handelSearch = (text: string) => {
    if (text) {
      const newData = reRenderItem.filter((item: any) => {
        const itemData = item.buttonText
          ? item.buttonText.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setListButtons(newData);
      setSearch(text);
    } else {
      setListButtons(reRenderItem);
      setSearch(text);
    }
  };

  const handelFilter = (item: any) => {
    const type = item.value;
    type !== 'All'
      ? setListButtons(filterButton(type, valueButton))
      : setListButtons(valueButton);
  };
  const renderItem = ({item}: any) => {
    return (
      <>
        <View style={styles.containerList}>
          <ResultButton buttonValue={item} />
          <View style={styles.line} />
        </View>
      </>
    );
  };
  const renderItemFilter = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handelFilter(item)}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <TextInput
        containerStyle={{marginBottom: 0}}
        placeholder="Tìm kiếm ... "
        style={{
          borderRadius: 30,
          width: widthScreen * 0.9,
        }}
        icon={'search'}
        value={search}
        onChangeText={text => handelSearch(text)}
      />
      <FlatList horizontal data={DataFiller} renderItem={renderItemFilter} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginVertical: 10,
        }}>
        Danh Sách Button Của Bạn
      </Text>
      <FlatList
        data={listButtons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.gray3,
    width: 150,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  containerList: {
    ...Style.shadow,
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    width: widthScreen * 0.9,
    height: 1,
    backgroundColor: Colors.gray3,
    marginVertical: 10,
  },
});
