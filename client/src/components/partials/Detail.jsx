import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.updateTheLocation = this.updateTheLocation.bind(this);
  }


  updateTheLocation(e) {
    console.log('updating location')
    e.preventDefault();
    this.props.updateLocation(this.props.info)
  }

  render() {
    return (

      <div
        className='destinationDivBox'
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.updateTheLocation}>
        <br/>
        {this.props.info.location}
        <br></br>
        <br></br>
        { this.props.info.id === this.props.activeid &&
        <textarea />
        }
        <br/>
        <button onClick={() => console.log('addfav clicked')} className="add-fav" type="submit">
          Add Favorite
        </button>
        <br/><br/>
      </div>

    );
  };
}

export default Detail;
