import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Input, Button  } from 'react-native-elements';

import API from "../API";
import AppHeader from './appHeader';

class DodajKupca extends Component {
  constructor(props){
    super(props);
    this.dodaj = this.dodaj.bind(this);
  }
  state = {
    naziv: "",
    adresa: "",
    masa: "",
    volumen: "",
    longitude: "",
    latitude: ""
  }
  dodaj(){
    const { navigateToNaslovna } = this.props;
    API.dodajKupca(this.state)
        .then(kupac => {
          this.setState({
            naziv: "",
            adresa: "",
            masa: "",
            volumen: "",
            longitude: "",
            latitude: ""
          })
          alert("Kupac uspjesno dodan, Povratak na glavni screen za 2sec");
        })
        .catch(error => {
          alert(JSON.stringify(error));
        })
  }

  render(){
    const { naziv, adresa, masa, volumen, longitude, latitude } = this.state;
    return (
      <View style={Styles.container}>
        <AppHeader title="Dodavanje" navigateToNaslovna={this.props.navigateToNaslovna}/>
           
        <View style={{ marginTop: 20, ...Styles.inputGroup}}>
          <Input
            label="Naziv:"
            placeholder="Ime i prezime" 
            value={naziv} 
            onChangeText={(text) => { this.setState({naziv: text})}} 
            style={Styles.inputField}/>
        </View>
        <View style={Styles.inputGroup}>
          <Input 
            label="Adresa:"
            placeholder="Sarajevska 4"
            value={adresa}
            onChangeText={(text) => { this.setState({ adresa: text})}}
            style={Styles.inputField}/>
        </View>
        <View style={Styles.inputGroup}>
          <Input 
            label="Masa:" 
            placeholder="232"
            value={masa}
            onChangeText={(text) => { this.setState({ masa: text})}}
            keyboardType="decimal-pad"
            style={Styles.inputField}/>
        </View>
        <View style={Styles.inputGroup}>
          <Input 
            label="Volumen:"
            placeholder="1000"
            value={volumen}
            onChangeText={(text) => { this.setState({ volumen: text})}}
            keyboardType="decimal-pad"
            style={Styles.inputField}/>
          </View>
        <View style={Styles.inputGroup}>
          <Input 
            label="Latitude:"
            placeholder="65.23"
            value={latitude}
            onChangeText={(text) => { this.setState({ latitude: text})}}
            keyboardType="decimal-pad"
            style={Styles.inputField}/>
        </View>
        <View style={Styles.inputGroup}>
          <Input 
            label="Longitude:"
            placeholder="44.29"
            value={longitude}
            onChangeText={(text) => { this.setState({ longitude: text})}}
            keyboardType="decimal-pad"
            style={Styles.inputField}/>
        </View>
        <Button 
          title="Kreiraj"
          onPress={this.dodaj} 
          containerStyle={Styles.createButton} />
          
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputGroup: {
    width: "90%",
    marginVertical: 5
  },
  inputField: {
    width: "100%",
    paddingHorizontal: 7
  },
  createButton: {
    marginTop: 20,
    width: "80%",
    paddingVertical: 9,
    paddingHorizontal: 14
  }

});


export default DodajKupca;