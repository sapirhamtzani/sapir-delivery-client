import React, { Component } from 'react';
import MethodsList from '../MethodsList/MethodsList';
import './Form.css';
import Autocomplete from '../Autocomplete/Autocomplete';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      zipcode: null,
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
        if (Object.entries(res.list).length > 0)
          this.setState({ methodsList: res.list });
        else {
          alert('Sorry! but there are no deliveries to your area');
          this.setState({ methodsList: null });
        }
      } else {
        console.log(res.reason);
      }
    });
  }

  handleChangeAddress(location) {
    this.setState({ address: location });
  }

  handleChangeZipCode(event) {
    this.setState({ zipcode: event.target.value });
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
            <Autocomplete
              handleChangeAddress={(location) =>
                this.handleChangeAddress(location)
              }
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
