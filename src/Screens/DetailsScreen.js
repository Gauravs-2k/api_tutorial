import React, { useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/actions';

const DetailsScreen = ({ navigation, item }) => {
    const { details } = useSelector(state => state.detailsReducer);
    const dispatch = useDispatch();
    const fetchBooks = () => dispatch(getDetails());
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item}>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <Text style={styles.textstyle}>Kristal Id = {details.kristalId}</Text>
                    <Text style={styles.textstyle}>{details.description}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    textstyle: {
        color: 'black',
        fontSize: 15,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        color: 'black',
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
});

export default DetailsScreen