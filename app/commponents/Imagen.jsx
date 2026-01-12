export default function Imagen ({src, ancho, borde, posicion, margen}) {
    return (
        <img 
           src={src}
           style={{
            width: ancho,
            borderRadius: borde,
            display: posicion,
            margin: margen,
           }}
        />
    );
}