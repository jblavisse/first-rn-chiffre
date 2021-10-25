import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  /*
    count: valeur de mon état
    setCount: une fonction qui permet de modifier la valeur de mon état
    0: Valeur initiale
  */
  const [count, setCount] = useState(0);
  const [myContentInput, setMyContentInput] = useState("")

  function incrementCount() {
    setCount(count+1)
  }

  const decrementCount = () => {
    setCount(count-1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Bienvenue sur mon application mobile!</Text>
      <Text style={styles.copyright}>Copyright JB Lavisse</Text>

      <Text>Bouton cliqué {count} fois!</Text>
      <Button color='#00ff00' title='+1' onPress={incrementCount} />
      <Button color='#00ff00' title='-1' onPress={decrementCount} />

      <TextInput style={styles.input} value={myContentInput}
          onChangeText={text => setMyContentInput(text)}
        />
      <Text>{myContentInput}</Text>
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
  maintitle: {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    padding: 10
  },
  copyright: {
    color: 'orange',
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple'
  }
});
