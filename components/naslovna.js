import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
class Naslovna extends Component{
  constructor(props){
    super(props);
    
    this.navigateToFirstLink = this.navigateToFirstLink.bind(this);
    this.navigateToThirdLink = this.navigateToThirdLink.bind(this);
    this.navigateToSecondLink = this.navigateToSecondLink.bind(this);
  }
  navigateToFirstLink(){
    this.props.navigteToDodajKupca();
  }
  navigateToSecondLink(){
    this.props.navigateToMapa();
  }
  navigateToThirdLink(){
    this.props.navigateToPrikazKupca();  
  }

  render(){
    return (
      <View style={Styles.container}>
        <Header 
          centerComponent={{ text: "Naslovna", style: { fontSize: 18, color: '#fff' } }}
        />
        <View
          style={Styles.buttonWrapper}
          >
          <Button
            title="Dodavanje kupaca"
            onPress={this.navigateToFirstLink} 
            containerStyle={Styles.navigationButton} />
          <Button 
            title="Mapa"
            onPress={this.navigateToSecondLink} 
            containerStyle={Styles.navigationButton} />
          <Button
            title="Pregled kupaca"
            onPress={this.navigateToThirdLink} 
            containerStyle={Styles.navigationButton} />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    navigationButton: {
      width: "80%",
      marginVertical: 30,
      paddingVertical: 9,
      paddingHorizontal: 14 
    }
});


export default Naslovna;