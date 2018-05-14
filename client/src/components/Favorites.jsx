import React, {Component} from 'react';

class Favorites extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  fetchFavorites() {
    const authToken = localStorage.getItem('authToken');
    fetch('/api/vacations/favorites', {
      'method': 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(resp => {
      resp.json();
      console.log(resp);
    })
  }
  componentDidMount() {
    this.fetchFavorites();
  }
  render(){
    return(<h1>yo</h1>)
  }
}

export default Favorites
