"use client";
import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(0);
  const LIMITE = 15;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const inicio = pagina * LIMITE;
        const fin = inicio + LIMITE;
        setProductos(data.slice(inicio, fin));
      })
      .catch((error) => console.error("Error:", error));
  }, [pagina]);

  return (
    <>
      <h3 className="mb-3">Productos</h3>

      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.title}</td>
              <td>${producto.price}</td>
              <td>{producto.category}</td>
              <td>
                <img src={producto.image} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button color="primary" onClick={() => setPagina(pagina + 1)}>
        Cargar otros 15 productos
      </Button>
    </>
  );
}
