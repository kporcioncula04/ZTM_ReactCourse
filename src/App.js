import './App.css';

import React, { Component } from 'react'
import { CardList } from './components/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  //arrow function - automatic binding to the place where arrow function is defined
  //they automatically get whats called lexial scoping

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <SearchBox
          placeholder='search Monsters'
          handleChange={this.handleChange} />

        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
