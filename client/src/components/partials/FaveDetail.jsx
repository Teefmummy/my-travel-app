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

  deleteFave(e) {
    console.log(this.props.info);   // send Delete to route
    e.preventDefault();
    const favObj = {
      id: this.props.info.id
    }
    console.log('deleting fave id: ', this.props.info.favoritesid)
    this.props.DELETE(favObj)
  }

  render() {
    return (

      <div
        className={ this.props.info.favoritesid
          ? 'destinationDivBox is-active' : 'destinationDivBox not-active' }
        key={this.props.info.favoritesid}
        id={this.props.info.favoritesid}
        onClick={this.updateTheLocation}>
        <br/>
      <h2>{this.props.info.location}</h2>
      { this.props.info.favoritesid  && (
        <div>
        <h4>Notes</h4>
        <textarea name="fave-note"
          value={this.props.info.fave_notes}
          onClick={(e) => e.stopPropagation()}/>
        </div>
      ) }
        <br/>
      { this.props.info.favoritesid &&
        <button onClick={this.updateFaveNote} className="add-fav" type="submit">
          Update Favorite
        </button>
        }
        <br/>
        <br/>
        { this.props.info.favoritesid &&
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
