import React, { Component } from 'react';
import NewMethod from '../NewMethod/NewMethod';

class EditMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methodObg: null,
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const methodId = params.get('id');

    if (methodId !== null) {
      fetch('https://sapir-delivery-server.herokuapp.com/findMethod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ methodId }),
      }).then(async (response) => {
        let res = await response.json();
        if (res.success) {
          this.setState({ methodObg: res.method });
        } else {
          window.location.assign(
            'https://sapir-delivery-client.herokuapp.com/Error'
          );
        }
      });
    } else {
      window.location.assign(
        'https://sapir-delivery-client.herokuapp.com/Error'
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.methodObg !== null ? (
          <NewMethod method={this.state.methodObg} />
        ) : null}
      </div>
    );
  }
}

export default EditMethod;
