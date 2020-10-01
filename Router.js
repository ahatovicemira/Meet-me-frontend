import React, { Component } from 'react';

import Naslovna from './components/naslovna';
import PrikazKupca from './components/PrikazKupca';
import DodajKupca from './components/dodajKupca';
import Mapa from './components/mapa';

const NASLOVNA = 1;
const PRIKAZ_KUPCA = 2;
const DODAJ_KUPCA = 3;
const MAPA = 4;

export default class Router extends Component {
  constructor(props){
    super(props);
    
    this.navigateToPrikazKupca = this.navigateToPrikazKupca.bind(this);
    this.navigteToDodajKupca = this.navigteToDodajKupca.bind(this);
    this.navigateToMapa = this.navigateToMapa.bind(this);
    this.navigateToNaslovna = this.navigateToNaslovna.bind(this);
  }
  state = {
    activeRoute: NASLOVNA
  }

  navigateToNaslovna(){
    this.setState({activeRoute: NASLOVNA})
  }
  navigateToPrikazKupca(){
    this.setState({ activeRoute: PRIKAZ_KUPCA})
  }
  navigteToDodajKupca(){
    this.setState({ activeRoute: DODAJ_KUPCA})
  }
  navigateToMapa(){
    this.setState({ activeRoute: MAPA })
  }

  render(){
    const { activeRoute } = this.state;
    if(activeRoute == NASLOVNA)
      return <Naslovna 
                sadasdsad="sdasdsad"
                navigteToDodajKupca={this.navigteToDodajKupca}
                navigateToPrikazKupca={this.navigateToPrikazKupca}
                navigateToMapa={this.navigateToMapa}
              />;
    if(activeRoute == PRIKAZ_KUPCA)
      return <PrikazKupca 
                navigateToNaslovna={this.navigateToNaslovna}
              />;
    if(activeRoute == DODAJ_KUPCA)
      return <DodajKupca 
                navigateToNaslovna={this.navigateToNaslovna}
              />;
    if(activeRoute == MAPA)
      return <Mapa 
                navigateToNaslovna={this.navigateToNaslovna}
              />
  }
}
