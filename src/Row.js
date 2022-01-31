import React from "react"
import { StyleSheet, View, Text } from "react-native";


const Row = (props) => (
    <View style = {styles.textContainer}>
        <Text style={styles.text}>{props.kristalName}</Text>
        <Text style={styles.text}>Kristal Type  =  {props.kristalType}</Text>
        <Text style={styles.text}>Fund Type     =  {props.fundType}</Text>
    </View>

)

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    textContainer: {
        paddingLeft: 10,

    }
})
export default Row;