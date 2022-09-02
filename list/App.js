import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    const newData = [...data, {key: text}];
    setData(newData);
    setText('');
  }

return (
  <View style={styles.container}>
    <Text>Testi</Text>
    <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
    <Button title="Press me" onPress={buttonPressed} />

    <FlatList
      style={styles.list}
      data={data}
      renderItem={ ({item}) => <Text>{item.key}</Text>}
      keyExtractor={(item, index) => index.toString()}
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
    marginTop: '30%'
  },
  title: {
    fontSize: 18
  },
  input: {
    width: '60%', 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    fontSize: 16
  },
  list: {
    marginTop: '10%',
  }
});
// tunnel
// npx expo start
//// <Button title ="-" onPress{() => Calculate('-') } />