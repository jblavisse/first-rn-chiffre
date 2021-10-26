import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Car from './Car';

export default function App() {
  const [users, setUsers] = useState([
    {id: 1, firstName: "JB", lastName: "Lavicé"},
    {id: 2, firstName: "Paul", lastName: "Mc Cartney"},
    {id: 3, firstName: "Eric", lastName: "Idle"}
  ])

  const [cars, setCars] = useState([
    {id: 1, brand:"Skoda", model:"Fabia"},
    {id: 2, brand:"Renault", model:"R5"},
    {id: 3, brand:"Citroën", model:"Cactus"},
    {id: 4, brand:"Volkswagen", model:"Golf"},
    {id: 5, brand:"Fiat", model:"Multipla"},
  ])

  return (
    <View style={styles.container}>
      {cars.map(car => (
        <Car key={car.id} brand={car.brand} model={car.model} />
      ))}


      {users.map(user => (
        <Text key={user.id}>{user.firstName} {user.lastName}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
