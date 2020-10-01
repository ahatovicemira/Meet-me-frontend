import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

class AppHeader extends Component {
  render(){
    return(
      <Header
        leftComponent={
          <TouchableOpacity onPress={this.props.navigateToNaslovna}> 
            <Icon name="arrow-back" color="#fff"/>
          </TouchableOpacity>
          }
        centerComponent={{ text: this.props.title, style: { fontSize: 18, color: '#fff' } }}
      />
      
    )
  }
}
export default AppHeader;