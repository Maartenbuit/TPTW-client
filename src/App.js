import React from 'react';
import { Route } from 'react-router-dom'

import RoomFormContainer from './components/RoomForm/RoomFormContainer'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={} /> */}
        <Route path="/rooms/" component={RoomFormContainer} />
        <Route path="/rooms/:id" component={RoomFormContainer} />
      </div>
    )
  }
}


