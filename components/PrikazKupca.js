import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import KupacItem from './kupacItem';
import API from "../API"
import AppHeader from './appHeader';

class PrikazKupca extends Component {
  constructor(props){
    super(props);
    this.obrisi = this.obrisi.bind(this);
  }

  state = {
    kupci: []
  }

  obrisi(id){
    API.obrisiKupca(id)
    .then( message => {
      var kupci = this.state.kupci;
      var newKupac = [];
      for(var i = 0; i < kupci.length; i++){
        if(kupci[i].id != id)
          newKupac.push(kupci[i]);
      }
      this.setState({ kupci: newKupac });
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }

  componentDidMount(){
    API.dohvatiKupce()
      .then(kupci => {
        this.setState({ kupci: kupci });
      })
      .catch(error => {
        alert(error);
      })
  }
  render(){
    return (
      <View style={Styles.mainContainer}>
        <AppHeader title="Prikaz kupaca" navigateToNaslovna={this.props.navigateToNaslovna}/>
        <ScrollView 
        contentContainerStyle={Styles.scrollChild}  
        style={Styles.container}>
              {
                this.state.kupci.map(item => {
                  return (
                    <KupacItem
                        id={item.id} 
                        obrisi={this.obrisi}
                        naziv={item.naziv} 
                        adresa={item.adresa} 
                        masa={item.masa} 
                        volumen={item.volumen} 
                        longitude={item.longitude}
                        latitude={item.latitude}
                      />
                  );
                })
              }
        </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  scrollChild: {
    width: "100%"
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: 'center'
  }
})
export default PrikazKupca;