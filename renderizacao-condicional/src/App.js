import React, {Component} from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      status:true,
      status1:1
    }


  }

  render(){
    return(
      <div>
        {
          this.state.status ?  <h1>bem vindo !</h1> : <h1>erro</h1>
        }


        {
          this.state.status1 ===1 &&
          <h1>status 1</h1>
        }
      </div>
    )
  }
}
export default App;
