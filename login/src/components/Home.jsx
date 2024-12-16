/* eslint-disable react/prop-types */
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {

    console.log(correoUsuario);
    
    return (
        <div>
            <h2 className="text-center">Bienvenido {correoUsuario} <button onClick={()=>signOut(auth)} className="btn btn-primary">Logaout</button></h2>
        </div>
    );
};

export default Home;