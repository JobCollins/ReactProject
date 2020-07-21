import React, { Component } from 'react';


class ListAppointments extends Component{
    render(){
        const listitems = this.props.appointments.map( item => (
            <>
                <div>{item.petName}</div>
                <div>{item.ownerName}</div>
            </>
            
        ))
        return(
            <div>{listitems}</div>
        )
    }
}

export default ListAppointments