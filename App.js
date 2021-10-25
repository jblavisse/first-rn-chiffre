import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Car from './Car';

export default function App() {
  const [users, setUsers] = useState([
    {id: 1, firstName: "JB", lastName: "Lavicé"},
    {id: 2, firstName: "Paul", lastName: "Mc Cartney"},
    {id: 3, firstName: "Eric", lastName: "Idle"}
  ])

  return (
    <View style={styles.container}>
      <Car brand="Skoda" model="Fabia" />
      <Car brand="Renault" model="R5" />
      <Car brand="Citroën" model="Cactus" />
      <Car brand="Volkswagen" model="Golf" />
      <Car brand="Fiat" model="Multipla" />

      {users.map(user => (
        <Text key={user.id}>{user.firstName} {user.lastName}</Text>
      ))
      /*
        il revient récupérer mon tableau users en entier
        Pour chacun des éléments, il va venir exécuter la fonction qui est
        en paramètre du .map

        1er élément du tableau
        la valeur de user: {id: 1, firstName: "JB", lastName: "Lavicé"}
        <Text key=1>JB Lavicé</Text>

        Le tableau de retour
        [<Text key=1>JB Lavicé</Text>]

        2ème élément du tableau
        la valeur de user:  {id: 2, firstName: "Paul", lastName: "Mc Cartney"}
        <Text key=2>Paul Mc Cartney</Text>

        Le tableau de retour
        [<Text key=1>JB Lavicé</Text,
          <Text key=2>Paul Mc Cartney</Text>
        ]

        3ème élément du tableau
        la valeur de user: {id: 3, firstName: "Eric", lastName: "Idle"}
        <Text key=3>Eric Idle</Text>

        Le tableau de retour
        [<Text key=1>JB Lavicé</Text,
          <Text key=2>Paul Mc Cartney</Text>,
          <Text key=3>Eric Idle</Text>
        ]

        En react.JS, dans le rendu...Pour un tableau de composants, React comprend
        qu'il doit les afficher un après l'autre
        <Text key=1>JB Lavicé</Text>
        <Text key=2>Paul Mc Cartney</Text>
        <Text key=3>Eric Idle</Text>
      */
      }

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
