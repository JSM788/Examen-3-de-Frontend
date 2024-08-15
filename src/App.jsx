import { useState } from "react";
import Card from "./Card";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    color: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setShowCard(true);
      setError("");
    } else {
      setShowCard(false);
    }
  };

  const validateForm = () => {
    let newError = "";

    if (form.nombre.trim().length < 3 || form.nombre.trim().startsWith(" ")) {
      newError = "Por favor chequea que la información sea correcta";
    }

    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!hexColorRegex.test(form.color)) {
      newError = "Por favor chequea que la información sea correcta";
    }

    setError(newError);
    return !newError;
  };

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            onChange={handleForm}
            value={form.nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="Ingresa tu color favorito (hex)"
            onChange={handleForm}
            value={form.color}
          />
        </div>
        {error && <small style={{ color: "red" }}>{error}</small>}

        <div className="form-group">
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </div>
      </form>
      {showCard && <Card form={form} />}
    </div>
  );
}

export default App;
