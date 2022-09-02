import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [number, setNumber] = React.useState(null);
  const [vastaus, setVastaus] = React.useState('Guess a number between 1-100');
  const [laskin, setLaskin] = React.useState(null);
  const [luku, setLuku] = React.useState(Math.floor(Math.random() * 100) + 1);

  const arvaa = () => {
    if (number == luku) {
      setLaskin(laskin+1)
      setVastaus('You guessed the number in ' + laskin + ' guesses')
    } else if (number > luku) {
      setLaskin(laskin+1)
      setVastaus('Your guess ' + number + ' is too high')
    } else {
      setLaskin(laskin+1)
      setVastaus('Your guess ' + number + ' is too low')
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20}}>
        <Text style={styles.title}>{ vastaus }</Text>
      </View>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={number => setNumber(number)} value={number} />
        <View style={{ flexDirection: 'row', marginTop: 10}}>
          <Button onPress={arvaa} title="Make guess" />
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
  title: {
    fontSize: 18
  },
  input: {
    width:'20%', 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    fontSize: 16
  }
});
// tunnel
// npx expo start
//// <Button title ="-" onPress{() => Calculate('-') } />