import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props)
    this.state = {name: 'señor desconocido'}
  }
  changeName() {
    let n = document.getElementsByClassName('input')[0].value
    this.setState({name: n})
  }
  render() {
    return (
      <div className="App-sayname">
        <input type="name" className="input" placeholder="Tu nombre" onChange={this.changeName.bind(this)}/>
        <h2 className="input-helper">Bienvenido {this.state.name}!</h2>
      </div>
    );
  }
}

export default Name;