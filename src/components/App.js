import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import '../style/app.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
    .then(users => {this.setState({robots: users})})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    if(this.state.robots.length == 0) {
      return <h1 className = 'header'>Loading</h1>
    } else {
    return (
      <div className = "center">
        <h1 className = 'header'>Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots = {filteredRobots} />
      </div>
    );
    }
  } 
}

export default App;