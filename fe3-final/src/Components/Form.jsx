import React, { useState } from "react";

const Form = () => {
  // Expresiones regulares para la validación de inputs
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const NAME_REGEX = /^[a-zA-Z]+$/;

  // Estados iniciales del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Función para manejar cambios en los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de información ingresada en los inputs
    if (
      formData.name.trim() !== "" &&
      NAME_REGEX.test(formData.name) &&
      formData.name.length > 5 &&
      EMAIL_REGEX.test(formData.email)
    ) {
      setSuccessMessage(`¡Gracias, ${formData.name}! Te contactaremos pronto por correo.`);
      setErrorMessage("");
      setFormData({ name: "", email: "" });
    } else {
      setErrorMessage("Por favor, verifique la información ingresada.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Ingrese su nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <label htmlFor="email">Por favor, ingrese su correo electrónico</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="correo@email.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <button className="favButton contactBtn" type="submit">
          Enviar
        </button>
      </form>
      {errorMessage && <h3>{errorMessage}</h3>}
      {successMessage && <h3>{successMessage}</h3>}
    </div>
  );
};

export default Form;
