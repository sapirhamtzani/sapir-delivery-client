import React, { Component } from 'react';
import Map from '../Map/Map';
import './NewMethod.css';

class NewMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: null,
      centerLat: null,
      centerLng: null,
      zipcode: null,
      methodName: null,
      methodRate: null,
    };

    this.method = props.method ? props.method : null;
  }

  handleChangeMethodName(event) {
    this.setState({ methodName: event.target.value });
  }

  handleChangeZipCode(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleChangeRate(event) {
    this.setState({ methodRate: event.target.value });
  }

  setLocation(currentCircleObg) {
    this.setState({
      radius: currentCircleObg.radius,
      centerLat: currentCircleObg.lat,
      centerLng: currentCircleObg.lng,
    });
  }

  componentDidMount() {
    if (this.method !== null) {
      this.setState({
        radius: this.method.radius,
        centerLat: this.method.centerLat,
        centerLng: this.method.centerLng,
        zipcode: this.method.zipcode,
        methodName: this.method.name,
        methodRate: this.method.rate,
      });
    }
  }

  handleSubmit() {
    const methodObj = this.state;
    fetch('https://sapir-delivery-server.herokuapp.com/addMethod', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(methodObj),
    }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
        window.location.assign(
          'https://sapir-delivery-client.herokuapp.com/Admin'
        );
      } else {
        console.log(res.reason);
      }
    });
  }

  checkFields = () =>
    (this.state.zipcode !== null && this.state.zipcode !== '') ||
    (this.state.centerLat !== null &&
      this.state.centerLat !== '' &&
      this.state.centerLng !== null &&
      this.state.centerLng !== '');

  render() {
    return (
      <div className="newMethodContainer">
        <h2>Set your method range using the map or enter a zip code</h2>
        <Map
          method={this.method}
          setLocation={(currentCircleObg) => this.setLocation(currentCircleObg)}
        />
        <div className="formContainer">
          <div className="form-group-methodlist">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Zip Code (if you used the map is not mandatory)"
              value={this.state.zipcode}
              onChange={(event) => this.handleChangeZipCode(event)}
            />
          </div>
          <div className="form-group-methodlist">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the method name"
              value={this.state.methodName}
              onChange={(event) => this.handleChangeMethodName(event)}
            />
          </div>
          <div className="form-group-methodlist">
            <label>Rate</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the method rate"
              value={this.state.methodRate}
              onChange={(event) => this.handleChangeRate(event)}
            />
          </div>
          <div className="form-group-methodlist">
            <label>Location</label>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.centerLat}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.centerLng}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() =>
                this.checkFields()
                  ? this.handleSubmit()
                  : alert(
                      'Must fill Zip Code or determine the range using the map'
                    )
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMethod;
