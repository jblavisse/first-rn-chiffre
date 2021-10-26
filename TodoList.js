import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTasks(json))
    }, [])

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
        margin: 10
    },
    taskTitle: {
        fontSize: 32
    }
})