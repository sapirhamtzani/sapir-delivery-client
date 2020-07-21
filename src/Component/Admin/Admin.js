import React, { Component } from 'react';
import MethodsList from '../MethodsList/MethodsList';
import './Admin.css';

//return to class with lifecycle compononet

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
    };
  }

  moveToNewMethodPage() {
    window.location.assign(
      'https://sapir-delivery-client.herokuapp.com/NewMethod'
    );
  }

  moveToEditMethodPage(methodId) {
    window.location.assign(
      `https://sapir-delivery-client.herokuapp.com/EditMethod?id=${methodId}`
    );
  }

  componentDidMount() {
    fetch('https://sapir-delivery-server.herokuapp.com/getAllMethods')
      .then(async (response) => {
        let res = await response.json();
        this.setState({ list: res.list });
      })
      .catch((e) => alert(`failed to fetch ${e}`));
  }

  render() {
    return (
      <div>
        <div className="headlineAdmin">
          <h2>Delivery Methods</h2>
        </div>
        <div className="AdminPage">
          <MethodsList
            methodsList={this.state.list}
            moveToEditMethodPage={(methodId) =>
              this.moveToEditMethodPage(methodId)
            }
          />
        </div>
        <div className="buttonContainerAdmin">
          <button
            type="submit"
            className="btnAdmin btn-primary"
            onClick={() => this.moveToNewMethodPage()}
          >
            Add new Method
          </button>
        </div>
      </div>
    );
  }
}

export default Admin;
