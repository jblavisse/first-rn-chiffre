import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTasks(json))
    }, [])

    return (
        <View>
            {tasks.map(task => (
                <Text>{task.title}</Text>
            ))}

        </View>
    )
}
