export default function FormularioContacto({ form, onChange, onSubmit, totalContactos }) {
    const noSePuedeEnviar =
        !form.nombre.trim() ||
        !form.telefono.trim() ||
        !form.correo.includes("@");

    return (
        <section className="form-panel">
            <h1 className="app-title">Formulario</h1>

            <p className="contador">
                Tienes <strong>{totalContactos}</strong>{" "}
                {totalContactos === 1 ? "contacto guardado" : "contactos guardados"}
            </p>

            <form onSubmit={onSubmit} className="form-contacto">
                <input
                    name="nombre"
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={onChange}
                />
                <input
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={onChange}
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={form.correo}
                    onChange={onChange}
                />
                <input
                    name="etiqueta"
                    placeholder="Etiqueta"
                    value={form.etiqueta}
                    onChange={onChange}
                />

                <button type="submit" disabled={noSePuedeEnviar}>
                    Agregar contacto
                </button>
            </form>
        </section>
    );
}