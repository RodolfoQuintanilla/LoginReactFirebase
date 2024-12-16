import { useState } from 'react';
import Imagen from '../assets/Tech Life - Media.png';
import ImagenProfile from '../assets/image.png';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false);

    const functAut = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;

        if (registrando) {

            try {
                await createUserWithEmailAndPassword(auth, correo, contrasena)
            } catch (error) {
                alert("Asegurece q la contraseña tenga 8 caracteres"+ error)
            }
            
        }
        else{
            try {
              await signInWithEmailAndPassword(auth, correo, contrasena)  
            } catch (error) {
                alert("El correo es Incorrecto")
                console.log(error);
                
            }
            
        }
        
    }


    return (
        <div className="container">
            <div className="row">
                {/* Columna formulari */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img className='estilo-profile' src={ImagenProfile} alt="" />
                            <form onSubmit={functAut}>
                                <input type="text" placeholder='Ingresar Email' className='cajaTexto' id='email' />
                                <input type="password" placeholder='Ingresar Contraseña' className='cajaTexto' id='password' />
                                <button className='btnfrom '>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                            </form>
                            <h4 className='texto'> {registrando ? "si ya tienes cuenta" : "no tienes cuenta"} <button className='btnSwicth' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"} </button></h4>
                        </div>
                    </div>
                </div>
                {/* Columna Imagenes */}
                <div className="col-md-8">
                    <img src={Imagen} className="tamano-imagen" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;