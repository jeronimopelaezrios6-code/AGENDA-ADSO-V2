import { useEffect, useState } from "react";
import "./App.css";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";
import Saludo from "./components/Saludo";

const contactosIniciales = [
  {
    id: 1,
    nombre: "Jeronimo pelaez rio",
    telefono: "300 123 4567",
    correo: "jeronimoPR@sena.edu.co",
    etiqueta: "Aprendiz",
  },
];

export default function App() {
  const [contactos, setContactos] = useState(() => {
    return JSON.parse(localStorage.getItem("contactos") || "null") || contactosIniciales;
  });
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    etiqueta: "",
  });

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  function guardarContacto(nuevo) {
    setContactos([...contactos, { id: Date.now(), ...nuevo }]);
  }

  function borrarContacto(id) {
    setContactos(contactos.filter((c) => c.id !== id));
  }

  function cambiarTexto(evento) {
    const { name, value } = evento.target;
    setForm({ ...form, [name]: value });
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    guardarContacto(form);
    setForm({ nombre: "", correo: "", telefono: "", etiqueta: "" });
  }

  return (
    <main className="app-container">
      <Saludo nombre="Jeronimo" curso="React" />

      <div className="panel-layout">
        <FormularioContacto
          form={form}
          onChange={cambiarTexto}
          onSubmit={enviarFormulario}
          totalContactos={contactos.length}
        />

        <section className="lista-panel">
          <h2 className="lista-titulo">Registros</h2>

          <div className="lista-contactos">
            {contactos.length === 0 ? (
              <p>No hay contactos en la agenda.</p>
            ) : (
              contactos.map((c) => (
                <ContactoCard
                  key={c.id}
                  id={c.id}
                  nombre={c.nombre}
                  telefono={c.telefono}
                  correo={c.correo}
                  etiqueta={c.etiqueta}
                  onDelete={borrarContacto}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}