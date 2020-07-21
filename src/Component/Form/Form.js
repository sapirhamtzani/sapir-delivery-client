import React, { Component } from 'react';
import MethodsList from '../MethodsList/MethodsList';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      zipcode: null,
      methodsList: null,
      location: null,
    };
  }

  handleSubmit() {
    const userObj = {
      address: this.state.address,
      zipcode: this.state.zipcode,
    };

    // fetch(
    //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    //     userObj.address
    //   )}&key=AIzaSyAcsAWJRVDJlbmQiQYGSeNhHTZlWaJ1MO4`
    // ).then(async (res) => {
    //   let { results } = await res.json();
    //   let cordLat = results[0].geometry.location.lat;
    //   let cordLng = results[0].geometry.location.lng;
    //   let centerLat = '32.09477268566945';
    //   let centerLng = ' 34.77666432381626';
    //   console.log(cordLat);
    //   console.log(cordLng);
    //   console.log(
    //     Math.sqrt(
    //       Math.pow(Number(cordLat) - Number(centerLat), 2) +
    //         Math.pow(Number(cordLng) - Number(centerLng), 2)
    //     )
    //   );
    // });
    fetch('https://sapir-delivery-server.herokuapp.com/getUserMethods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObj),
    }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
        console.log('list', res.list);
        this.setState({ methodsList: res.list });
      } else {
        alert('No suitable methods');
      }
    });
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangeZipCode(event) {
    this.setState({ zipcode: event.target.value });
  }

  componentDidMount() {
    fetch(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAcsAWJRVDJlbmQiQYGSeNhHTZlWaJ1MO4&libraries=places'
    ).then(async (res) => {
      let result = await res.json();
      this.setState({ location: result });
    });
  }

  render() {
    return (
      <div className="form">
        <div>
          <div className="headlineForm">
            <h2>Discover the deliveries closest to you</h2>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              onChange={(event) => this.handleChangeAddress(event)}
            />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Zip code"
              onChange={(event) => this.handleChangeZipCode(event)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() =>
              this.state.address && this.state.address.length > 0
                ? this.handleSubmit()
                : alert('address field cant be empty')
            }
          >
            Submit
          </button>
        </div>
        {this.state.methodsList !== null ? (
          <div className="methodListContainer">
            <MethodsList methodsList={this.state.methodsList} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Form;
