import React from "react"
import { StyleSheet, View, Text, Image } from "react-native";


const Row = (props) => (
    <View style={styles.item}>
        <Image
            style={styles.showImage}
            source={{
                uri: props.kristalImageUrl
            }}
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.kristalName}</Text>
            <Text style={styles.text}>Kristal Type  =  {props.kristalType}</Text>
            <Text style={styles.text}>Fund Type     =  {props.fundType}</Text>
        </View>
    </View>



)

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    textContainer: {
        paddingLeft: 10,

    },
    item: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        alignItems: 'flex-start',
        margin: 10,
        justifyContent: 'flex-start',
        borderBottomWidth: 3,
        borderBottomColor: '#eee',
    },
    showImage: {
        width: 50,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
})
export default Row;