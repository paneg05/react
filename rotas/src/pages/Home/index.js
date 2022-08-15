import {Link} from 'react-router-dom'

function Home() {
    return (
      <div >
        <h1>bem vindo a pagina home</h1>
        <Link to='/sobre'>Sobre</Link>
        <br></br>
        <Link to='/Contato'>Contato</Link>
      </div>
    );
  }
  
  export default Home;
  