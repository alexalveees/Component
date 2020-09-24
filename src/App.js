import React, {Component} from 'react';
import { Clock } from './Clock';
import { Users } from './Users';

export default class App extends Component {
  state= {
    searchForUser: '',
    isClockHidden: false
  }

  hideClock = () => {
    this.setState({ isClockHidden: true})
  }

  render() {
    const handleFormSubmit = (event) => {
      event.preventDefault()
      const inputValue = document.getElementById('search-input').value
      this.setState({
        searchForUser: inputValue
      })
    }

    if (this.state.isClockHidden) {
      return <h1>Clock is hidden</h1>
    }

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input id="search-input" placeholder="Search for user"/>
          <button>Search</button>
        </form>
        
        <Users searchFor={this.state.searchForUser}/>
        <div>
          <button onClick={this.hideClock}>Hide Clock</button>
          <Clock/>
        </div>
      </div>
    ); 
  }  
}

