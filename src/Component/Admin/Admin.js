import React from 'react';
import MethodsList from '../MethodsList/MethodsList';

function Admin() {
  const list = () => {
    return fetch(
      'https://sapir-delivery-server.herokuapp.com/getAllMethods'
    ).then(async (response) => {
      let res = await response
        .json()
        .then(() => res.list)
        .catch((e) => alert(`failed to fetch ${e}`));
    });
  };
  return (
    <div className="AdminPage">
      <MethodsList methodsList={list} />
    </div>
  );
}

export default Admin;
