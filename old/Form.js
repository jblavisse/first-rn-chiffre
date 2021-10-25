import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import User from './User';

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Nom:</Text>
        <TextInput style={styles.input} value={lastName}
          onChangeText={text => setLastName(text)} />

        <Text>Prénom:</Text>
        <TextInput style={styles.input}
          value={firstName} onChangeText={text => setFirstName(text)} />
      </View>


      <Text>Bonjour, vous vous appelez {firstName} {lastName}</Text>

      <User firstName="Cyrano" lastName="De Bergerac" />
      <User firstName="JB" lastName="LeBest" />
      <User firstName="Elton" lastName="John" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple'
  },
  form: {
    backgroundColor: 'lightgray',
    marginBottom: 10,
    padding: 15,
    color: 'blue'
  }
});
