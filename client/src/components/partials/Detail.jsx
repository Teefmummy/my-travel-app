import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
    }
    this.clickedOn = this.clickedOn.bind(this);
  }
  clickedOn(e) {
    console.log(e.target)
    const locationObj = e.target.id
    this.setState({
      locationSelected: !this.state.locationSelected,
    })
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
        <button onClick={this.props.updateLocation(this.props.info)}>
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
