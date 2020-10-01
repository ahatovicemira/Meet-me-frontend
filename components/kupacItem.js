import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { Text } from 'react-native-elements';

class KupacItem extends Component {
 constructor(props){
   super(props);

 }


  render(){
    const { id, obrisi, naziv, masa, volumen, adresa, longitude, latitude } = this.props;

    return (
      <View style={Styles.container}>
        <Text style={Styles.naziv}>{naziv}</Text>
        <Text style={Styles.adresa}>{adresa}</Text>
        <View style={Styles.infoRow}>
          <Text><Text style={Styles.desciptor}>Masa:</Text> <Text>{masa}</Text></Text>
          <Text><Text style={Styles.desciptor}>Volumen:</Text> <Text>{volumen}</Text></Text>
        </View>
        <View style={Styles.infoRow}>
          <Text><Text style={Styles.desciptor}>Lon:</Text> <Text>{longitude}</Text></Text>
          <Text><Text style={Styles.desciptor}>Lat:</Text> <Text>{latitude}</Text></Text>  
        </View>
        <Button
          title="Obrisi"
          onPress={() => {obrisi(id);} } 
          containerStyle={Styles.deleteButton} />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#19c2e6',
    borderRadius: 20
  },
  naziv: {
    fontSize: 24,
    fontWeight: "600"
  },
  adresa: {
    fontStyle: 'italic',
    color: "#858585"
  },
  desciptor: {
    fontSize: 12,
    color: "#858585"
  },
  infoRow:{
    flexDirection: 'row',
    width: "90%",
    justifyContent: 'space-evenly',
    marginVertical: 4
  },
  deleteButton: {
    marginTop: 20,
    width: "80%",
    paddingVertical: 9,
    paddingHorizontal: 14,
  }
})


export default KupacItem;