import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.updateTheLocation = this.updateTheLocation.bind(this);
  }


  updateTheLocation(e) {
    console.log('updating location to: ', this.props.info.location)
    e.preventDefault();
    this.props.updateLocation(this.props.info)
  }

  render() {

    return (

      <div
        className={ this.props.info.id === this.props.activeid ? 'destinationDivBox is-active' : 'destinationDivBox not-active' }
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.updateTheLocation}>
        <br/>
      <h2>{this.props.info.location}</h2>
      { this.props.info.id === this.props.activeid && (
        <div>
        <h4>Notes</h4>
        <textarea onClick={(e) => e.stopPropagation()}/>
        </div>
      ) }
        <br/>
      { this.props.activeid &&
        <button onClick={() => console.log('addfav clicked')} className="add-fav" type="submit">
          Add Favorite
        </button>
        }
        <br/><br/>
      </div>

    );
  };
}

export default Detail;
