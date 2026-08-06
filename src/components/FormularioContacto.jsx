export default function FormularioContacto({
  form,
  onChange,
  onSubmit,
  totalContactos,
}) {
  const noSePuedeEnviar =
    !form.nombre.trim() ||
    !form.telefono.trim() ||
    !form.correo.includes("@");

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

      <h1 className="text-3xl font-bold text-center text-white">
        Agenda ADSO
      </h1>

      <p className="text-center text-slate-400 mt-2 mb-8">
        Tienes{" "}
        <span className="font-bold text-cyan-400">
          {totalContactos}
        </span>{" "}
        {totalContactos === 1
          ? "contacto guardado"
          : "contactos guardados"}
      </p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5"
      >
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Nombre completo
          </label>

          <input
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre"
            value={form.nombre}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Teléfono
          </label>

          <input
            type="text"
            name="telefono"
            placeholder="Ingrese el teléfono"
            value={form.telefono}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Correo electrónico
          </label>

          <input
            type="email"
            name="correo"
            placeholder="ejemplo@correo.com"
            value={form.correo}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Etiqueta
          </label>

          <input
            type="text"
            name="etiqueta"
            placeholder="Ej: Aprendiz"
            value={form.etiqueta}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <button
          type="submit"
          disabled={noSePuedeEnviar}
          className="mt-3 rounded-xl bg-cyan-500 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
        >
          Agregar contacto
        </button>
      </form>
    </section>
  );
}