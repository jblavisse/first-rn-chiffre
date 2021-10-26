import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTasks(json))
    }, [])

    function deleteTask() {
        Alert.alert(
            "Supprimer une tâche",
            "Etes-vous sûr de vouloir supprimer cette tâche?",
            [
                {
                    text: "Oui",
                    onPress: () => console.log("Tâche supprimée")
                },
                {
                    text: "Non",
                    onPress: () => console.log("Annulation..."),
                    style: 'cancel'
                }
            ],
            {
                cancelable: true
            }
            )
    }

    return (
        <View>
            {/* {tasks.map(task => (
                <View style={styles.task} key={task.id}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                </View>
            ))} */}
            <FlatList
                data={tasks}
                renderItem={({item}) => (
                    <View style={styles.task}>
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <TouchableOpacity onPress={deleteTask}>
                            <AntDesign name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskTitle: {
        fontSize: 32
    }
})