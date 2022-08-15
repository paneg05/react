import React, {useEffect,useState} from "react";
import './style.css'
function App() {

  const [nutri, setNutri]= useState()
  

  useEffect(()=>{
    function loadApi () {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url).then(response=>response.json()).then((json)=>{
        setNutri(json)
      })
    }
    loadApi()
  },[])

  return (
    <div className="container" >
      <header>
        <strong>React Nutri</strong>
      </header>
      {
       nutri? nutri.map((el,i)=>{
          return(
            <article key={el.id} className={'post'}>
              <strong className="titulo">{el.titulo}</strong>
              <img src={el.capa} alt={el.titulo} className='capa'/>
              <p className="subtitulo">
                {el.subtitulo}
              </p>
              <h4>Categoria: {el.categoria}</h4>
              <a className="botao">acessar</a>
            </article>
          )
        }):'carregando'
        
      }
    </div>
  );
}

export default App;
