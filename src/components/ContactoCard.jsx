export default function ContactoCard({
  id,
  nombre,
  telefono,
  correo,
  etiqueta,
  onDelete,
}) {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">

      <h3 className="text-xl font-bold text-white mb-4">
        {nombre}
      </h3>

      <div className="space-y-2">

        <p className="text-slate-300">
          <span className="mr-2">📞</span>
          {telefono}
        </p>

        <p className="text-slate-300 break-all">
          <span className="mr-2">📧</span>
          {correo}
        </p>

      </div>

      {etiqueta && (
        <span className="inline-block mt-5 rounded-full bg-cyan-500/20 border border-cyan-500 px-4 py-1 text-sm font-semibold text-cyan-300">
          {etiqueta}
        </span>
      )}

      <button
        onClick={() => onDelete(id)}
        className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-95"
      >
        Eliminar
      </button>

    </article>
  );
}