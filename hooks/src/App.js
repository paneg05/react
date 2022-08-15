import React, {useState,useEffect, useMemo, useCallback} from "react";

function App() {

  const  [tarefas, setTarefas] = useState([])
  const [nome, setNome] = useState('luan')
  const [input, setInput] = useState()

  let add = useCallback(()=>{
    setTarefas([...tarefas, input])
    setInput(' ')
  },[tarefas,input])

  let ainput = (e)=>{
    setInput(e.target.value)
  }

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas')
      if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
      }
    //executa assim que desmonta o componente
 

      //executa assim que o componente é montado
  },[])

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  },[tarefas])//executa sempre que a state é atualizada

  const totalTarefas = useMemo(()=>tarefas.length,[tarefas])

  return (
    <div>
        {
          tarefas.map((el,i)=>{
            return(
              <h1 key={i}>{el}</h1>
            )
            
          })
        }

        <h1>{nome}</h1>
        {
          totalTarefas? <h2>você tem {totalTarefas} tarefas !</h2>: <h2>você não tem tarefas!</h2>
        }
        <input type='text' value={input || ''} onChange={ainput}></input>
        <button onClick={add} type="button">adicionar tarefa</button>
    </div>
  );
}

export default App;
