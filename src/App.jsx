import { useEffect, useState } from "react";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto.jsx";
import Saludo from "./components/Saludo";
import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
} from "./Api.js";

export default function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    etiqueta: "",
    prioridad: "media"
  });

  // GET - cargar contactos desde JSON Server
  useEffect(() => {
    async function cargarContactos() {
      try {
        const data = await listarContactos();
        setContactos(data);
      } catch (e) {
        setError("No se pudo cargar la lista de contactos");
      } finally {
        setCargando(false);
      }
    }

    cargarContactos();
  }, []);

  // POST - agregar contacto
  async function guardarContacto(nuevo) {
    try {
      const creado = await crearContacto(nuevo);

      setContactos((prev) => [...prev, creado]);
    } catch (e) {
      setError("No se pudo agregar el contacto");
    }
  }

  // DELETE - eliminar contacto
  async function borrarContacto(id) {
    try {
      await eliminarContactoPorId(id);

      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      setError("No se pudo eliminar el contacto");
    }
  }

  function cambiarTexto(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
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

            {cargando && (
              <p className="text-slate-400 mb-4">
                Cargando contactos...
              </p>
            )}

            {error && (
              <p className="text-red-400 mb-4">
                {error}
              </p>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

              {!cargando && contactos.length === 0 ? (
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