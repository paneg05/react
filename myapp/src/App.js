
import React,{Component} from 'react'

class Equipe extends Component {

  render(){
    return(
      <div>
        <Sobre nome='luan' cargo='programador'/>
      </div>
    )
  }

}



class Sobre extends Component {
  render(){
    return(
      <div>
        <h2>Olá eu sou {this.props.nome}</h2>
        <h2>Eu sou {this.props.cargo}</h2>
      </div>
    )
  }
}


const Bemvindo= (props) => {
  return(
    <div>
      <h2>Bem vindo, {props.name}</h2>
    </div>
  )
}


function App() {
 return(


  <div>
    curso react

    <h1>olá mundo!!</h1>
    <Equipe
    nome='luan'
    cargo='programador'
    idade='25'/>
  </div>

 )
}

export default App;
