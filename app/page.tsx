import Titulo from './commponents/Titulo';
import Parrafo from './commponents/Parrafo';
import Imagen from './commponents/Imagen';

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
      ancho="400px"
      borde="10px"
      posicion="block"
      margen="0 auto"
      ></Imagen>
    </main>
      
    
    
    
  );
}