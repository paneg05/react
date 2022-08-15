/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      nome:'luan',
      contador: 0
    }

    this.aumentar =this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar(){
    let state =this.state
    state.contador +=1
    this.setState(state)
  }

  diminuir(){
    let state = this.state
    state.contador -=1
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h3>
          <button onClick={this.aumentar}>+</button>
          {this.state.contador}
          <button onClick={this.diminuir}>-</button>
          </h3>
      </div>
    )
  }
}

export default App;
