import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    const listItem = [...list, {key: item}]
    console.log(listItem);
    setList(listItem);
    setItem("");
  };

  const clear = () => { 
    setList([]);
    setItem("");
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={item => setItem(item)} value={item} />
        <View style={{ flexDirection: 'row', marginTop: 10}}>
          <View style={{ marginRight: 10}}>
          <Button onPress={add} title="Add" />
          </View>
          <View>
          <Button onPress={clear} title="Clear" />
          </View>
        </View>
        <Text style={styles.list}>Shopping List</Text>
        <FlatList
          data={list}
          renderItem={ ({item}) => <Text>{item.key}</Text> }
          keyExtractor={ (item, index) => index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5
  },
  list: {
    marginTop: '10%'
  }
});