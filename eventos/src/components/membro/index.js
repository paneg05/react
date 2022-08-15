import React, {Component} from "react";

class Membro extends Component{
    constructor(props){
        super()

        this.state={
            nome: props.nome
        }

        this.entrar=this.entrar.bind(this)
        this.sair=this.sair.bind(this)
    }

    entrar(){
        this.setState({nome:this.props.nome})
    }

    sair(){
        console.log('saiu')
    }

    render(){
        return(
            <div>
               <h2>Bem vindo, {this.state.nome}</h2> 
               <button onClick={this.entrar}>Entrar como {this.props.nome}</button>
               <button onClick={()=>{this.setState({nome:''})}}>Sair</button>
            </div>
        )
    }
}

export default Membro