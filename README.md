This client project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and build as a single-page applications(SPA).
Is being deployed with this url (https://sapir-delivery-client.herokuapp.com).

The server project was bootstrapped with 'express' and written in NodeJs.
Is being deployed with this url (https://sapir-delivery-server.herokuapp.com) - Not necessary for running.

### 'user flow'
The url above (client project) link to the home page, where the user can insert his adrress and postal code (the last not mandatory).

### 'udmin flow'
'/Admin' will link to an admin page where you can view the delivery methods.
- Edit method by pressing a row.
- Add new method by pressing the button.

- '/NewMethod' will also link to 'Add new method' page.
- '/EditMethod?id={some method id ...} will also link to 'Edit methos page' (incorrect method id will link to not found page).

### 'NewMethod page'
- In order to submit method a zipcode or latlng bounders must be written (bounders are determined using the map).

### 'EditMethod page'
- Displays the current information for the method we wish to edit.
- Submit will save the new information.

### 'database'
- The project data is being storage in 'Firebase' platform.

### 'Uses modules client':
- 'google-map-react'
- 'react-places-autocomplete'
- 'react-router-dom'
- '@material-ui/core'

### 'Uses modules server':
- 'body-parser'
- 'express'
- 'firebase-admin'
- 'node-fetch'
- 'uuidv4'




