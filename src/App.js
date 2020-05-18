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
    fetch ('http://dummy.restapiexample.com/api/v1/employees')
    .then(respone => respone.json())
    .then(
      users => { 
        console.log('hasil', users)
        this.setState({ biodata : users.data }) 
      } )
  }

  searchRobot = (e) => {
    console.log('cek',e.target);
    this.setState({ cari : e.target.value })
  }
 

  render(){

    const { biodata } = this.state;
    
    
    if (biodata.length) {
      return(
        <div className="new">
                  <h1> Monster Roblox </h1>
                  <SearchBox 
                    placeholder ='Mencari data'
                    handleChange ={ (e) => this.searchRobot(e)}
                  />
                  <Cardlist biodata={biodata} />   
        </div>
      );
    } else {
      return(
        <div></div>
      )
      
    }

    
  }

}

export default App;
