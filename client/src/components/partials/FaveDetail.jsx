import React, { Component } from 'react';

class FaveDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      favoritesLoaded: false
    }
    this.updateTheLocation = this.updateTheLocation.bind(this);
    this.updateFaveNote = this.updateFaveNote.bind(this);
    this.deleteFave = this.deleteFave.bind(this);
  }


  updateTheLocation(e) {
    console.log('updating location to: ', this.props.info.location)
    e.preventDefault();
    this.props.updateLocation(this.props.info)
  }

  updateFaveNote(e) {   // send Post to route
    e.preventDefault();
    console.log('updating fave id: ', this.props.info.id)
    // this.props.updateFaveNote(this.props.info)
  }

  deleteFave(e) {     // send Delete to route
    e.preventDefault();
    console.log('deleting fave id: ', this.props.info.id)
    // this.props.deleteFave(this.props.info)
  }

  render() {
    return (

      <div
        className={ this.props.info.id
          ? 'destinationDivBox is-active' : 'destinationDivBox not-active' }
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.updateTheLocation}>
        <br/>
      <h2>{this.props.info.location}</h2>
      { this.props.info.id  && (
        <div>
        <h4>Notes</h4>
        <textarea name="fave-note" onClick={(e) => e.stopPropagation()}/>
        </div>
      ) }
        <br/>
      { this.props.info.id &&
        <button onClick={this.updateFaveNote} className="add-fav" type="submit">
          Update Favorite
        </button>
        }
        <br/>
        <br/>
        { this.props.info.id &&
          <button onClick={this.deleteFave} className="add-fav" type="submit">
            Delete
          </button>
          }

        <br/><br/>
      </div>

    );
  };
}

export default FaveDetail;
