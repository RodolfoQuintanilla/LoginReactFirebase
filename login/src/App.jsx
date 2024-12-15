import Login from './components/Login';
import Home from './components/home';
import { useState } from 'react';
import './App.css'

//importando los Modulos de firebase
import appFirebase from '../src/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(appFirebase)

function App() {

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })
  return (
    <>
      {usuario ? <Home correoUsuario={usuario.emal} /> : <Login />}
    </>
  )
}

export default App
