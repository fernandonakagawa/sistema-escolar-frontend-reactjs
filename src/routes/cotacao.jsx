import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cotacao() {
  const [cotacao, setCotacao] = useState();
  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => setCotacao(response.data.bpi))
      .catch((err) => {
        console.error("Erro!" + err);
      });
  }, []);
  return (
    <div id="Cotacao">
      <h1> Cotação do Bitcoin </h1>
      <p>Valor: {cotacao?.USD.rate}</p>
      {/*<p>Descrição: {curso?.bio}</p>*/}
    </div>
  );
}
