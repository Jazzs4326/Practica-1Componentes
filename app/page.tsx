import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import Contador from './components/Contador';
import CambiarFondo from './components/CambiarFondo';

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

      <Contador button="Contador"></Contador>

      <CambiarFondo />  
    </main>
      
    
    
    
  );
}