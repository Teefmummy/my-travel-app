import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fave_notes: ""
    }
    this.updateTheLocation = this.updateTheLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  updateTheLocation(e) {
    // console.log('updating location')
    e.preventDefault();
    this.props.updateLocation(this.props.info)
  }

  handleChange(e) {
    const {name, value} = e.target;
    console.log(this.state)
    this.setState({
      [name]:e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.create_fave(this.state.fave_notes)
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
        <textarea
          type="fave_notes"
          name="fave_notes"
          value={this.state.fave_notes}
          onChange={this.handleChange}
          onClick={(e) => e.stopPropagation()}/>
        }
        <br/>
        <button onClick={this.handleSubmit} className="add-fav" type="submit">
          Add Favorite
        </button>
        <br/><br/>
      </div>

    );
  };
}

export default Detail;
