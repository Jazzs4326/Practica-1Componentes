"use client";
import {Button, Table, Modal, ModalHeader, ModalBody, ModalFooter,} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAirbnb,faAmilia,faAndroid,} from "@fortawesome/free-brands-svg-icons";
import datosTabla from "../data/datosTabla.json";
import React, { useState } from "react";

export default function Tabla() {
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState(null);

  const toggleModal = () => setModal(!modal);

  const mostrarIcono = (icono) => {
    switch (icono) {
      case "faAirbnb":
        return faAirbnb;
      case "faAmilia":
        return faAmilia;
      case "faAndroid":
        return faAndroid;
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Icono</th>
            <th>Boton</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.nombre}</td>
              <td>
                <FontAwesomeIcon icon={mostrarIcono(item.icono)} />
              </td>
              <td>
                <Button onClick={() => { setDatos(item); toggleModal(); }}>Ver más</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{datos?.nombre}</ModalHeader>
        <ModalBody>
          <img
            src={datos?.imagen}
            alt="Imagen"
            style={{ width: "100%" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
