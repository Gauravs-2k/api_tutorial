import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, ScrollView } from 'react-native';
import { getApiData } from '../api';
import Row from '../Row';
const SerchingScreen = () => {
  const [data, setData] = useState([])
  const [apiText, setApiText] = useState('');

  const getapi = async () => {
    getApiData().then((data) => setData(data['kristalList'])).catch((err) => { });
    //console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (apiText.length > 5) {
      getapi()
    }

  }, [apiText])

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
          <ScrollView>
            {data.map(item => (
              <View style={styles.item}>
                <Image
                  style={styles.showImage}
                  source={{
                    uri: item.kristalImageUrl
                  }}
                />
                <Row
                  kristalName={item.kristalName}
                  kristalType={item.kristalType}
                  fundType={item.fundType}
                />
              </View>
            ))}
          </ScrollView>
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
  showImage: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
});

export default SerchingScreen;
