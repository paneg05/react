import{getFirestore} from 'firebase/firestore'
import app from './firebaseConnection'



const db = getFirestore(app)


export default db