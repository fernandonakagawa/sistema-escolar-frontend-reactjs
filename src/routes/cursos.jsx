import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Cursos() {
  const [curso, setCurso] = useState();
  useEffect(() => {
    api
      .get("/")
      .then(function (response) {
        setCurso(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.error(error);
      })
      .then(function () {
        console.log("fim");
      });
  }, []);
  return (
    <div id="Cursos">
      <h1> Cursos Disponíveis </h1>
      <p>Nome: {curso?.nome}</p>
      {/*<p>Descrição: {curso?.bio}</p>*/}
    </div>
  );
}
