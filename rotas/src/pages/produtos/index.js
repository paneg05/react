import {Link, useParams} from 'react-router-dom'

function Produto(){

    const {id} = useParams()

    return(
        <div>
            <p>isso é o produto {id}</p>
            <Link to='/'>Home</Link>
        </div>

    )
}


export default Produto