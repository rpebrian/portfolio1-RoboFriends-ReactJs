import React, { Component } from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

class App extends Component{
  constructor (){
    super();

    this.state = {
      biodata : [],
      cari: ''
    };
  }

  componentDidMount () {
    fetch ('http://jsonplaceholder.typicode.com/users')
    .then(respone => respone.json())
    .then(
      users => { 
  
        this.setState({ biodata : users }) 
      } )
  }

  searchRobot = (e) => {
    this.setState({ cari : e.target.value })
  }
 

  render(){

    const { biodata, cari } = this.state;
    const filterbiodata = biodata.filter(biodata => 
        biodata.name.toLowerCase().includes(cari.toLowerCase())
      );

    return(
      <div className="new">
                <h1> Monster Roblox </h1>
                <SearchBox 
                  placeholder ='Mencari data'
                  handleChange ={ (e) => this.searchRobot(e)}
                />
                <Cardlist biodata={filterbiodata} />   
      </div>
    );
  }

}

export default App;
