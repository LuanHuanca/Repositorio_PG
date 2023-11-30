import React, { useState } from "react";
import CustomInput from "../components/moleculas/CustomInput";
import "./EnvioProyectoScreen.css";
import { dialogoSuperior } from "../services/sweetalerts";
import VerificacionIngreso from "./VerificacionIngreso";
import { useLocalStorage } from "../services/useLocalStorage";

const EnvioProyectoScreen = () => {
  //para saber si la sesion se encuentra iniciada
  const [loggedIn] = useLocalStorage("loggedIn", false);
  //para recolectar los datos facilmente de nuestro formulario para su posterior uso
  const [carrera, setCarrera] = useState("");
  const [tituloProyecto, setTituloProyecto] = useState("");
  const [apellidoAutor, setApellidoAutor] = useState("");
  const [nombreAutor, setNombreAutor] = useState("");
  const [apellidoTutor, setApellidoTutor] = useState("");
  const [nombreTutor, setNombreTutor] = useState("");
  const [apellidoRelator, setApellidoRelator] = useState("");
  const [nombreRelator, setNombreRelator] = useState("");
  const [gestion, setGestion] = useState("");
  const [resumen, setResumen] = useState("");
  const [abstract, setAbstract] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [keywords, setKeywords] = useState("");
  const [archivo, setArchivo] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui ponemos el dialogo de confirmacion debido a que se cargo correctamente el formulario
    dialogoSuperior("success", "Proyecto cargado con exito");
    // Limpiar los campos después de enviar el formulario
    setCarrera("");
    setTituloProyecto("");
    setApellidoAutor("");
    setNombreAutor("");
    setApellidoTutor("");
    setNombreTutor("");
    setGestion("");
    setResumen("");
    setAbstract("");
    setPalabrasClave("");
    setKeywords("");
    setArchivo("");
  };


  return (
    <div className="ScreenEnvio">
      {!loggedIn ? (
        <VerificacionIngreso/>
      ) : (
        <>
          <div className="EnvioProyectoScreen">
            <h1>Envio de Proyectos de Grado</h1>
            <h2>
              Complete el registro para hacer el envio de su proyecto de grado
            </h2>
            <form onSubmit={handleSubmit}>
              <CustomInput
                title={"Carrera :"}
                placeholder={"Introduzca la carrera a la cual pertenece"}
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
              />
              <p>
                Ingrese el titulo completo del documento( no usar mayusculas
                sostenida). Ej: Solucion de un problema de programacion lineal
                restringida
              </p>
              <CustomInput
                title={"Titulo de su Proyecto :"}
                placeholder={"Introduzca su titulo de proyecto"}
                value={tituloProyecto}
                onChange={(e) => setTituloProyecto(e.target.value)}
              />
              <h3>Autor/es :</h3>
              <p>Ingrese los apellidos y nombres del autor/es del trabajo</p>
              <div className="autores">
                <CustomInput
                  title={"Apellido Completos:"}
                  placeholder={"ej: Veliz Mendoza"}
                  value={apellidoAutor}
                  onChange={(e) => setApellidoAutor(e.target.value)}
                />
                <CustomInput
                  title={"Nombre Completo: "}
                  placeholder={"ej: Jose Antonio"}
                  value={nombreAutor}
                  onChange={(e) => setNombreAutor(e.target.value)}
                />
              </div>
              <h3>Tutor/es :</h3>
              <p>Ingrese los apellidos y nombres del tutor/es del trabajo</p>
              <div className="tutores">
                <CustomInput
                  title={"Apellido Completos:"}
                  placeholder={"ej: Veliz Mendoza"}
                  value={apellidoTutor}
                  onChange={(e) => setApellidoTutor(e.target.value)}
                />
                <CustomInput
                  title={"Nombre Completo: "}
                  placeholder={"ej: Jose Antonio"}
                  value={nombreTutor}
                  onChange={(e) => setNombreTutor(e.target.value)}
                />
              </div>
              <h3>Relator/es :</h3>
              <p>Ingrese los apellidos y nombres del relator/es del trabajo</p>
              <div className="tutores">
                <CustomInput
                  title={"Apellido Completos:"}
                  placeholder={"ej: Veliz Mendoza"}
                  value={apellidoRelator}
                  onChange={(e) => setApellidoRelator(e.target.value)}
                />
                <CustomInput
                  title={"Nombre Completo: "}
                  placeholder={"ej: Jose Antonio"}
                  value={nombreRelator}
                  onChange={(e) => setNombreRelator(e.target.value)}
                />
              </div>
              <CustomInput
                title={"Gestion :"}
                placeholder={"Ej: II-2023"}
                value={gestion}
                onChange={(e) => setGestion(e.target.value)}
              />
              <div className="resumenAbstract">
                <div className="resumen">
                  <h3>Resumen :</h3>
                  <p>Llene correctamente el siguiente campo</p>
                  <textarea
                    name="resumen"
                    className="area_texto"
                    value={resumen}
                    onChange={(e) => setResumen(e.target.value)}
                  ></textarea>
                </div>
                <div className="abstract">
                  <h3>Abstract :</h3>
                  <p>Llene correctamente el siguiente campo</p>
                  <textarea
                    name="abstract"
                    className="area_texto"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <p>
                Al introducir las palabras/keywords clave separelos por una coma
              </p>
              <div className="keywords">
                <CustomInput
                  title={"Palabras clave: "}
                  placeholder={" Introduzca sus palabras clave"}
                  value={palabrasClave}
                  onChange={(e) => setPalabrasClave(e.target.value)}
                />
                <CustomInput
                  title={"Keywords :"}
                  placeholder={"Introduzca sus keywords"}
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>
              <h3>Subida de proyecto de grado</h3>
              <input
                type="text"
                placeholder="Introduzca la url de donde se encuentra su proyecto de grado"
                value={archivo}
                onChange={(e) => setArchivo(e.target.value)}
              />
              <br />
              <button type="submit" className="button-envio">
                Enviar trabajo
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default EnvioProyectoScreen;


