import { useEffect, useState } from "react";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";
import Saludo from "./components/Saludo";

const contactosIniciales = [
  {
    id: 1,
    nombre: "Jeronimo Pelaez Rios",
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

  function cambiarTexto(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function enviarFormulario(e) {
    e.preventDefault();
    guardarContacto(form);
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      etiqueta: "",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto p-8">

        <Saludo nombre="Jeronimo" curso="React" />

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 mt-10">

          <FormularioContacto
            form={form}
            onChange={cambiarTexto}
            onSubmit={enviarFormulario}
            totalContactos={contactos.length}
          />

          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Registros
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

              {contactos.length === 0 ? (
                <p className="text-slate-400">
                  No hay contactos en la agenda.
                </p>
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

      </div>

    </main>
  );
}