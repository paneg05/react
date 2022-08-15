import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      nome:'',
      email:'manga',
      senha:123,
      sexo:'masculino',
      form:{
        nome:'',
        email:'',
        senha:'',
        sexo:'masculino'
      }
    }

    this.trocaEmail=this.trocaEmail.bind(this)
    this.trocaSexo=this.trocaSexo.bind(this)
    this.cadastrar=this.cadastrar.bind(this)
    this.mudaDados=this.mudaDados.bind(this)
  }

  trocaEmail(event){
    let valorDigitado=event.target.value
    console.log(valorDigitado)
    this.setState({email:valorDigitado})
  }

  trocaSexo(e){
    let sexo=e.target.value
    this.setState({sexo:sexo})
  }

  cadastrar(e){
    const {nome,email,senha} = this.state

    
    console.log(nome,email,senha)

    e.preventDefault()
  }

  mudaDados(e){
    let form =this.state.form
    form[e.target.name]=e.target.value
    this.setState({form:form})
  }


  render(){
    return(
      <div>
       email: <input type='email' id="email" name='email'  onChange={this.trocaEmail} value={this.state.email}></input>
      <br></br>
       senha: <input type='password' id='senha' name='senha' onChange={(e)=>{this.setState({senha:e.target.value})}} value={this.state.senha}></input>
      <br></br>
      sexo:
      <select name="sexo" onChange={this.trocaSexo} value={this.state.sexo}>
        <option value='masculino'>masculino</option>
        <option value='feminino'>feminino</option>
      </select>
      <h3>{this.state.sexo}</h3>
      <h1>Novo usuário</h1>
      <form onSubmit={this.cadastrar}>
        <label>Nome: </label>
       <input name="nome" type='text' value={this.state.nome} onChange={(e)=>{this.setState({nome:e.target.value})}}/><br/>
       <label>Email: </label>
       <input name='email' type='email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} /><br/>
       <button type='submit'>enviar</button>
      </form>

      <div>
      <h2>Login</h2>
      nome:
      <input type="text" name='nome' value={this.state.form.nome} onChange={this.mudaDados}/><br/>
      email:
      <input type="text" name='email' value={this.state.form.email} onChange={this.mudaDados}/><br/>
      sexo: 
      <select name='sexo' value={this.state.form.sexo} onChange={this.mudaDados}>
        <option value='masculino'>Masculino</option>
        <option value='feminino'>feminino</option>
      </select>
      </div>

      </div>
      
    )
  }
}

export default App;
