import React from "react";

function Apiexe1() {
  function buscarGatinho() {
    let status = document.getElementById("status");
    let imagem = document.getElementById("foto-gato");

    status.innertText = "Buscando gatinho na nuvem...";

    //O fetch inicia a viagem até a API

    fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    )
      .then(function (resposta) {
        //Primeiro 'then': Tramsforma a resposta bruta
        return resposta.json();
      })
      .then(function (dados) {
        // Segundo 'then' : Usa os dados/lembrando o que ele pegou

        let urlGato = dados[0];

        imagem.src = urlGato;
        imagem.style.display = "BLOCK";
        status.innerText = "Gatinhocarregado com sucesso:";
      })

      .catch(function (erro) {
        // o "catch" trata se algo der errado //
        status.innertText = "Ops! O mensageiro se perdeu.";
        console.error("Erro no fetch", erro);
      });
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ff9800",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h2>API Externa: The Cat API</h2>
      <button
        onClick={buscarGatinho}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Trazer novo Gatinho
      </button>

      <p id="status">aguardando comando...</p>
      <img
        id="foto-gato"
        src=""
        alt="Auto"
        style={{
          width: "250px",
          display: "mono",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      ></img>
    </div>
  );
}

export default Apiexe1;
