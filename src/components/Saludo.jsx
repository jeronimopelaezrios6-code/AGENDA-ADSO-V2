function Saludo({ nombre = "Aprendiz", curso = "React" }) {
  return (
    <header className="mb-10 text-center">

      <h1 className="text-4xl md:text-5xl font-extrabold text-white">
        ¡Hola,{" "}
        <span className="text-cyan-400">
          {nombre}
        </span>
        !
      </h1>

      <p className="mt-4 text-lg text-slate-400">
        Bienvenido al curso de{" "}
        <span className="font-semibold text-cyan-300">
          {curso}
        </span>
      </p>

      <div className="w-32 h-1 bg-cyan-500 rounded-full mx-auto mt-6"></div>

    </header>
  );
}

export default Saludo;