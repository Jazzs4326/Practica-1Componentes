"use client";
import {Form,FormGroup,Label,Input,Button,Modal,ModalHeader,ModalBody,FormFeedback,} from "reactstrap";
import { useState } from "react";

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
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "nombre":
      case "apellido":
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          error = "Solo se permiten letras";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Correo electrónico inválido";
        }
        break;
      case "edad":
        if (!/^\d+$/.test(value) || value < 0 || value > 120) {
          error = "Edad inválida";
        }
        break;
      case "fechaRegistro":
        const today = new Date().toISOString().split("T")[0];
        if (value < today) {
          error = "La fecha no puede ser anterior a hoy";
        }
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
    const errorMessage = validateField(name, newValue);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };
  const toggleModal = () => {
    let newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setModalOpen(!modalOpen);
    }
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
            valid={errors.nombre ? false : true}
            invalid={errors.nombre ? true : false}
          />
          <FormFeedback>{errors.nombre}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Apellido</Label>
          <Input
            name="apellido"
            type="text"
            value={formData.apellido}
            onChange={handleChange}
          />
          {errors.nombre && (
            <small style={{ color: "red" }}>{errors.nombre}</small>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            valid={errors.email ? false : true}
            invalid={errors.email ? true : false}
          />
          <FormFeedback>{errors.email}</FormFeedback>
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
            valid={errors.edad ? false : true}
            invalid={errors.edad ? true : false}
          />
          <FormFeedback>{errors.edad}</FormFeedback>
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
            valid={errors.fechaRegistro ? false : true}
            invalid={errors.fechaRegistro ? true : false}
          />
          <FormFeedback>{errors.fechaRegistro}</FormFeedback>
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
