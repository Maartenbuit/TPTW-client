import React from 'react'
import LoginFormContainer from './loginFormContainer'
import { RoomForm } from './RoomForm';

export default class Homepage extends React.Component {


  render() {
    let mainForm;
    const user = this.props.user                      //change this one
    if(!user){
      mainForm = <LoginFormContainer />
    } else {
      mainForm = <RoomForm /> 
    }

    return (
        <div className="Homepage">
          <header className="App-header">
            <h1 className="App-title">THE PATH TO WAR</h1>   
          </header>
          <main>
          {mainForm}      
          </main>
        </div>
    );
  }
}