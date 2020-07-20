import React, { Component } from 'react';
import MethodsList from '../MethodsList/MethodsList';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      zipcode: '',
      methodsList: null,
    };
  }

  handleSubmit() {
    const userObj = {
      address: this.state.address,
      zipcode: this.state.zipcode,
    };
    fetch('https://sapir-delivery-server.herokuapp.com/getUserMethods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObj),
    }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
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

  render() {
    return (
      <div className="Form">
        <div>
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
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button>
        </div>
        {this.state.methodsList !== null ? (
          <MethodsList methodsList={this.state.methodsList} />
        ) : null}
      </div>
    );
  }
}

export default Form;
