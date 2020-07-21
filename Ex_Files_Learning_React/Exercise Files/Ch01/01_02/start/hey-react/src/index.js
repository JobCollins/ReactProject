import React, {useState, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
    );
  return(
    <>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

class Form extends React.Component {
  state = { 
    value: "",
  }
  newColor = e => this.setState({ value: e.target.value})
  submit = e => {
    console.log(`New Color: ${this.state.value}`);
    e.preventDefault()
  }
  render() {
    return(
      <form onSubmit={this.submit}>
        <label>
          Favorite Color:
          <input type="color" onChange={this.newColor} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Form/>,
  document.getElementById('root')
);
