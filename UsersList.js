import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useFonts } from 'expo-font'


export default function App() {
    const [users,setUsers] = useState([])

    let [fontsLoaded] = useFonts({
        'Loutre': require('./assets/fonts/Loutre.ttf')
    })

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => setUsers(response.data))

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    function hello() {
        console.log("coucou");
    }

    if(!fontsLoaded) {
        return <Text>Police en cours de récupération...</Text>
    }
    else return (
        <View style={styles.container}>
            {/* <ScrollView>
                {users.map(user => (
                    <View style={styles.user} key={user.id}>
                        <Text style={styles.userName}>{user.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
            <FlatList
                data={users}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={hello} >
                        <View style={styles.user}>
                            <Text style={styles.userName}>{item.name}</Text>
                                <AntDesign name="user" size={32} color="black"
                                />
                        </View>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    user: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    userName: {
        fontSize: 24,
        fontFamily: 'Loutre'
    }
})