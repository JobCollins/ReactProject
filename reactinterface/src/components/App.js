import React, { Component } from 'react';
import '../css/App.css';


import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'

import {without} from 'lodash'

class App extends Component {

  constructor(){
    super();
    this.state = {
      appointments: [],
      formDisplay: false,
      lastIndex: 0,
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  deleteAppointment(appointment){
    let tempApts = this.state.appointments;
    tempApts = without(tempApts, appointment); //delete record


    this.setState({
      appointments: tempApts
    })

  }

  componentDidMount(){
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
      const appointments = result.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({ lastIndex: this.state.lastIndex +  1})
        return item;
      })

      this.setState({
        appointments : appointments
      });

    });
  }

  render(){

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments 
                  formDisplay={this.state.formDisplay}
                />
                <SearchAppointments />
                <ListAppointments 
                  appointments={this.state.appointments}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
}

export default App;
