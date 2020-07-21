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
      orderBy:'petName',
      orderDir:'asc',
      queryText: '',
      lastIndex: 0,
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.changeOrder = this.changeOrder.bind(this)
    this.addApt = this.addApt.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  changeOrder(order, dir){
    this.setState({
      orderBy: order,
      orderDir: dir
    })
  }

  addApt(appointment){
    let tempApts = this.state.appointments;
    appointment.aptId = this.state.lastIndex;
    tempApts.unshift(appointment)
    this.setState({
      appointments:tempApts,
      lastIndex: this.state.lastIndex + 1
    })
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

    let order; //how to order data
    let filteredApts = this.state.appointments

    if (this.state.orderDir === 'asc') {
      order=1
    } else {
      order=-1
    }

    filteredApts = filteredApts.sort((a, b) => {
      if(a[this.state.orderBy].toLowerCase() < 
      b[this.state.orderBy].toLowerCase()
      ){
        return -1 * order;
      }
      else{
        return 1 * order;
      }
    }).filter(eachItem => {
      return(
        eachItem['petName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['ownerName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['aptNotes']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      )
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments 
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addApt ={this.addApt}
                />
                <SearchAppointments 
                orderBy={this.state.orderBy}
                orderDir={this.state.orderDir}
                changeOrder={this.changeOrder}
                />
                <ListAppointments 
                  appointments={filteredApts}
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
