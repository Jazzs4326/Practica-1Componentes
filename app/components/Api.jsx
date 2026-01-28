"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Button,
} from "reactstrap";
import React, { useState } from "react";

export default function Api() {
  const [users, setUsers] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);

  const getUsers = () => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

const titleStyle = { textAlign: "center", margin: "20px" };
  const formStyle = { maxWidth: "500px", margin: "0 auto", textAlign: "left" };

  return (
    <div>
      <h2 style={titleStyle}>Componente Api</h2>
      <Button onClick={getUsers}>Obtener Usuarios</Button>
      {users.map((user) => (
        <Card
          key={user.id}
          className="my-2"
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>{user.username}</CardHeader>
          <CardBody>
            <CardText>{user.email}</CardText>
          </CardBody>
          <CardFooter>{user.address.city}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
