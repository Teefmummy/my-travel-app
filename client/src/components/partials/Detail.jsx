import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      isactive: (this.props.info.id === this.props.activeid ? true : false)
    }
    this.clickedOn = this.clickedOn.bind(this);
    this.updateTheLocation = this.updateTheLocation.bind(this);
  }
  clickedOn(e) {
    e.stopPropagation();

    console.log(e.target)
    const locationObj = e.target.id
    this.setState({
      locationSelected: !this.state.locationSelected
    })
    console.log('isactive: ', this.state.isactive)
  }

  updateTheLocation() {
    this.props.updateLocation(this.props.info)
  }

  render() {
    return (
      (this.state.locationSelected) ? (<div
        className='destinationDivBox'
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.clickedOn}>
        {this.props.info.location}
        <br></br>
        <br></br>
        <textarea />
        {/* <button onClick={this.props.updateLocation.bind(this, this.props.info)}> */}
          <button onClick={this.updateTheLocation}>
          Go here!
        </button>
      </div>) :


      (<div
        className='destinationDivBox'
        key={this.props.info.id}
        id={this.props.info.id}
        onClick={this.clickedOn}>
        {this.props.info.location}
        <br></br>
        <br></br>
        <button>
          Go here!
        </button>
      </div>)

    );
  };
}

export default Detail;
