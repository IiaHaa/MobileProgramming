import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [tulos, setTulos] = React.useState(null);

  const laskeYhteen = () => {
    setTulos(
      Number(number1)+Number(number2)
    )
    onChangeNumber1(null);
    onChangeNumber2(null);
  };

  const laskeErikseen = () => { 
    setTulos(
      number1-number2
    )
    onChangeNumber1(null);
    onChangeNumber2(null);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {tulos}</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={onChangeNumber1} value={number1} />
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={onChangeNumber2} value={number2} />
        <View style={{ flexDirection: 'row', marginTop: 10}}>
          <View style={{ marginRight: 10}}>
          <Button onPress={laskeYhteen} title="+" />
          </View>
          <View>
          <Button onPress={laskeErikseen} title="-" />
          </View>
        </View>
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
  },
  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5
  }
});
// tunnel
// npx expo start
// const initialFocus = useRef(null);
// initialFocus.current.focus();