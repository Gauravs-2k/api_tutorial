import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { getApiData } from '../api';
import Row from '../Row';

const SerchingScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [apiText, setApiText] = useState('sarsagrges');



  const getapi = async () => {
    getApiData().then((data) => setData(data['kristalList'])).catch((err) => { console.log('Thiserr==', err) });
    //console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (apiText.length > 5) {
      getapi()
    }

  }, [apiText])


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { kristalId: item.kristalId })}>
      <View key={item.kristalUniqueId}>
        <Row
          kristalImageUrl={item.kristalImageUrl}
          kristalName={item.kristalName}
          kristalType={item.kristalType}
          fundType={item.fundType}
        />
      </View>
    </TouchableOpacity >
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          onChangeText={setApiText}
          value={apiText}
          editable
        />
        {apiText.length > 5 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
          />

        ) : (
          <View>
            <Text style={styles.text}>Enter more than 5 letters</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
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
  inputField: {
    color: 'black',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    minHeight: 50,
    minWidth: 320,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

});

export default SerchingScreen;
