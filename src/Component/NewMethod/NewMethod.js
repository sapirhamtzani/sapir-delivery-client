import React, { Component } from 'react';
import Map from '../Map/Map';
import '../Form/Form.css';
import './NewMethod.css';

class NewMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: '',
      centerLat: '',
      centerLng: '',
      zipcode: '',
      methodName: '',
      methodRate: '',
    };
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

  handleSubmit() {
    const methodObj = this.state;
    console.log('methodObj', methodObj);
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
        alert('No suitable methods');
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Set your method range using the map or enter a zip code</h2>
        <Map
          setLocation={(currentCircleObg) => this.setLocation(currentCircleObg)}
        />
        <div className="formContainer">
          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Zip Code (if you used the map is not mandatory)"
              onChange={(event) => this.handleChangeZipCode(event)}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the method name"
              onChange={(event) => this.handleChangeMethodName(event)}
            />
          </div>
          <div className="form-group">
            <label>Rate</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the method rate"
              onChange={(event) => this.handleChangeRate(event)}
            />
          </div>
          <div className="form-group">
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
              onClick={() => this.handleSubmit()}
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
