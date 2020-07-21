import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'

class App extends Component {

  constructor(){
    super();
    this.state = {
      appointments: []
    }
  }

  componentDidMount(){
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
      const appointments = result.map(item => {
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
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
}

export default App;
