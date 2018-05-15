import React, { Component } from 'react';

class FaveDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      favoritesLoaded: false,
      fave_notes:
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

  updateFavorite(e) {   // send Post to route
    e.preventDefault();
    console.log('updating fave id: ', this.props.info.id)
    const faveObj = {
      fave_id: this.props.info.id,
      fave_notes: this.state.fave_notes
    }
    this.props.updateFavorite(faveObj)
  }

  deleteFave(e) {     // send Delete to route
    e.preventDefault();
    console.log('deleting fave id: ', this.props.info.id)
    // this.props.deleteFave(this.props.info)
  }

  handleChange(e) {
    // see https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const {name, value} = e.target;
    console.log(name, value);
    this.setState((prevState, props) => ({
      fave_notes: {
        ...prevState.fave_notes,
        [name]: value
      }
componentDidMount(){
  this.setState={
    fave_notes: this.props.
  }
}

  render() {

    return (

      <div
        className={ this.props.info.id === this.props.activeid
          ? 'destinationDivBox is-active' : 'destinationDivBox not-active' }
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.updateTheLocation}>
        <br/>
      <h2>{this.props.info.location}</h2>
      { this.props.info.id === this.props.activeid && (
        <div>
        <h4>Notes</h4>
        <textarea name="fave_notes" onChange={this.handleChange} onClick={(e) => e.stopPropagation()}/>
        </div>
      ) }
        <br/>
      { this.props.activeid &&
        <button onClick={this.updateFavorite} className="add-fav" type="submit">
          Update Favorite
        </button>
        }
        { this.props.activeid &&
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
