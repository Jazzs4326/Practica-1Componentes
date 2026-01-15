export default function Titulo({ texto, fuente, tamaño, color, posicion }) {
    return (
        <h1
            style={{
                fontFamily: fuente,
                fontSize: tamaño,
                color: color,
                textAlign: posicion,
            }}
        >
            {texto}
        </h1>
    )
}