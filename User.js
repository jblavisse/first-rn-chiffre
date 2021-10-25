import React from 'react'
import { View, Text } from 'react-native'

export default function User({firstName, lastName}) {
    return (
        <View>
            <Text>Nom: {firstName} {lastName}</Text>
            <Text>Age: 22 ans</Text>
        </View>
    )
}