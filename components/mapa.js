import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import MapView, { Marker, Callout } from "react-native-maps";
import AppHeader from './appHeader'
import API from '../API';

class Mapa extends React.Component {
  state = {
    kupci: []
  }
  componentDidMount(){
    API
      .dohvatiKupceSaPutem()
      .then(kupci => {
        this.setState({ kupci: kupci })
      })
  }
  render() {
    const { kupci } = this.state;
    return (
      <View style={Styles.container} >
      <AppHeader title="Mapa" navigateToNaslovna={this.props.navigateToNaslovna}/>

        <MapView style={Styles.container}>
          {
            kupci.map(kupac => {
              return (
                <Marker 
                  coordinate={{longitude: kupac.longitude, latitude: kupac.latitude}}
                >
                  <Callout>
                    <View>
                      <Text>Naziv: {kupac.naziv}</Text>
                      <Text>Masa: {kupac.masa}</Text>
                      <Text>Volumen: {kupac.volumen}</Text>
                      <Text>Redoslijed u putu: {kupac.redoslijed}</Text>
                    </View>
                  </Callout>
                </Marker>
              )
            })
          }
        </MapView>
      </View>
      )
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Mapa;
