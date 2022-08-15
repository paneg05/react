import React, { Component } from "react";
import Membro from "./components/membro";


  class App extends Component{
    constructor(props){
      super(props)

      this.state={

      }
    }

    render(){
      return(
        <div>
          <Membro nome='visitante'/>
        </div>
      )
    }
  }


export default App;
