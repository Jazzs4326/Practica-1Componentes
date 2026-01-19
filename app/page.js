import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import Contador from './components/Contador';
import CambiarFondo from './components/CambiarFondo';
import {Toast} from './components/Toast';
import Modal from './components/Modal';
import Tabla from './components/Tabla';


export default function Home() {
  return (
    <main>
      <Titulo 
      texto="Bienvenido a mi aplicación"
      fuente="Arial, sans-serif"
      tamaño="36px"
      color="#000000"
      posicion="center"
      ></Titulo>

      <Parrafo 
      texto="Esta es una aplicación de ejemplo utilizando componentes en React."
      ></Parrafo>

      <Imagen
      src=" src\img.png"
      src2=" src\image.png"
      ancho="400px"
      borde="10px"
      posicion="block"
      margen="0 auto"
      ></Imagen>

      <Contador button="Contador" posicion="center"></Contador>

      <CambiarFondo color1="#b5f0c4" color2="#facff4" />  

      <Toast color="danger" colorAlert="danger"></Toast>

      <Modal></Modal>
      
      <Tabla></Tabla>
    </main>
      
    
    
    
  );
}