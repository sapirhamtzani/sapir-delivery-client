import React, { Component } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
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
      <div className="Form">
        <div>
          <div className="headlineForm">
            <h2>Discover the deliveries closest to you</h2>
          </div>
          {/*<Autocomplete*/}
            {/*id="country-select-demo"*/}
            {/*style={{ width: 300 }}*/}
            {/*options={this.state.location}*/}
            {/*autoHighlight*/}
            {/*getOptionLabel={(option) => option.label}*/}
            {/*renderInput={(params) => (*/}
              {/*<TextField*/}
                {/*{...params}*/}
                {/*label="Address"*/}
                {/*variant="outlined"*/}
                {/*inputProps={{*/}
                  {/*...params.inputProps,*/}
                  {/*autoComplete: 'new-password', // disable autocomplete and autofill*/}
                {/*}}*/}
              {/*/>*/}
            {/*)}*/}
          {/*/>*/}
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
              this.state.address !== null
                ? this.handleSubmit()
                : alert('address cant be empty')
            }
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
