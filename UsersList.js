import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'

export default function App() {
    const [users,setUsers] = useState([])

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => setUsers(response.data))

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
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
                    <View style={styles.user}>
                        <Text style={styles.userName}>{item.name}</Text>
                    </View>
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
        margin: 10
    },
    userName: {
        fontSize: 32
    }
})