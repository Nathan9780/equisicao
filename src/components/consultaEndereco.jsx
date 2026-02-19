import React from "react";

function ConsultaEndereco() {
  function buscaCep() {
    let cepDigitado = document.getElementById("input-cep").value;
    let log = document.getElementById("status-cep");
    let resultado = document.getElementById("resultado-endereco");

    //limpa resultados anteriores e dar retorno
    log.innerText = "Consultando correios...";
    resultado.innerText = "";

    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    fetch(url)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (dados) {
        if (dados.erro === true) {
          log.innerText = "❌ CEP não encontrado.";
          return;
        } else {
          log.innerText = "Endereço encontrado com sucesso!";
          resultado.innerHTML =
            "<strong>CEP:</strong> " +
            dados.localidade +
            "<br>" +
            "<strong>Bairro:</strong> " +
            dados.bairro +
            "<br>" +
            "<strong>Estado:</strong> " +
            dados.uf;
        }
      })
      .catch(function (erro) {
        log.innerText = "Erro tecnico ao conectar no sistema.";
        console.error(erro);
      });
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #4caf50",
        marginTop: "10px",
        textAlign: "center",
        maxWidth: "500px",
      }}
    >
      <h2>Consulta de Endereço por CEP</h2>
      <input type="text" id="input-cep" placeholder="Digite o CEP" />
      <button onClick={buscaCep}>Consultar</button>
      <p id="status-cep">Aguardando consulta...</p>
      <div id="resultado-endereco"></div>
    </div>
  );
}

export default ConsultaEndereco;
