"use client";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function Formulario() {

  const initialFormData = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    edad: "",
    genero: "",
    rol: "",
    opciones: false,
    notas: "",
    fechaRegistro: "",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState( initialFormData );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const titleStyle = { textAlign: "center", margin: "20px" };

  const formStyle = { maxWidth: "500px", margin: "0 auto", textAlign: "left" };

  return (
    <main style={titleStyle}>
      <h1>Formulario de Registro</h1>

      <Form style={formStyle}>
        {/* Nombre */}
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Apellido</Label>
          <Input
            name="apellido"
            type="text"
            value={formData.apellido}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Edad</Label>
          <Input
            name="edad"
            type="number"
            value={formData.edad}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Género</legend>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="masculino"
              checked={formData.genero === "masculino"}
              onChange={handleChange}
            />

            <Label check>Masculino</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="femenino"
              checked={formData.genero === "femenino"}
              onChange={handleChange}
            />

            <Label check>Femenino</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label>Rol</Label>
          <Input
            type="select"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option value="">Selecciona un rol</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Input>
        </FormGroup>

        <FormGroup check>
          <Input
            type="checkbox"
            name="opciones"
            checked={formData.opciones}
            onChange={handleChange}
          />
          <Label check>Acepto términos</Label>
        </FormGroup>

        <FormGroup>
          <Label>Notas</Label>
          <Input
            type="textarea"
            name="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Fecha de registro</Label>
          <Input
            type="date"
            name="fechaRegistro"
            value={formData.fechaRegistro}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary" type="button" onClick={toggleModal}>
          Mostrar
        </Button>
        <Button
          color="secondary"
          type="button"
          onClick={handleReset}
          style={{ marginLeft: "10px" }}
        >
          Reiniciar
        </Button>
      </Form>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Información Registrada</ModalHeader>

        <ModalBody>
          <p>
            <strong>Nombre:</strong> {formData.nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {formData.apellido}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Edad:</strong> {formData.edad}
          </p>
          <p>
            <strong>Género:</strong> {formData.genero}
          </p>
          <p>
            <strong>Rol:</strong> {formData.rol}
          </p>
          <p>
            <strong>Opciones:</strong> {formData.opciones ? "Sí" : "No"}
          </p>
          <p>
            <strong>Notas:</strong> {formData.notas}
          </p>
          <p>
            <strong>Fecha de registro:</strong> {formData.fechaRegistro}
          </p>
        </ModalBody>
      </Modal>
    </main>
  );
}
