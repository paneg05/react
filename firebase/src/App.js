
import './style.css'
import fireBase from "./firebaseConnection";
import {doc, getDoc,collection} from 'firebase/firestore'
import db from './db'
import {useState, useEffect,useMemo} from 'react'

function App() {
  const [title, setTitle]= useState()
  const [autor, setAutor]=useState()

  async function handleAd(){
    const docRef = doc(db, "posts", "123");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    
  }


  return (
    <div className="app">

      <h1>react js + firebase</h1>

      <div className='container'>

        <label>Title:</label>
        <textarea type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
        <label>Autor:</label>
        <input type='text' value={autor} onChange={(e)=>setAutor(e.target.value)}/>

        <button onClick={handleAd}>Cadastrar</button>

      </div>
      
    </div>
  );
}

export default App;
