import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Car({brand,model}) {
    const [countPress, setCountPress] = useState(1);

    function vroum() {
        setCountPress(countPress+1);
        console.log(`Ma ${brand} ${model} fait vroum vroum.
        ${countPress}ème fois`)
    }

    return (
        <View style={styles.car}>
            <Text style={styles.carText} onPress={vroum} >{brand} {model}</Text>
            {countPress>=10 ?
                <Text style={styles.carText}>En panne</Text>
            :   null}
        </View>
    )
}

const styles = StyleSheet.create({
    car: {
      borderWidth: 2,
      borderColor: 'red',
      padding: 5,
      margin: 10
    },
    carText: {
        color: 'red',
        fontSize: 24
    }
  });
