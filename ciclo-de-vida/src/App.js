import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      hora:'00:00:00'
    }
  }
  componentDidMount(){ // roda depois que o componente é montado
    setInterval(()=>{

      this.setState({hora: new Date().toLocaleTimeString()})
    },1000)
  }

  componentDidUpdate(){ //executa sempre que o componente é atualizado
    console.log('atualizou')
  }



  render(){
    return(
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    )
  }
}

export default App;
