import React from "react";

function Apiexe2() {
  function buscarGatinho() {
    let status = document.getElementById("status");
    let imagem = document.getElementById("foto-pet");

    status.innertText = "Buscando gatinho na nuvem...";

    //O fetch inicia a viagem até a API

    fetch("https://api.thecatapi.com/v1/images/search")
      .then(function (resposta) {
        //Primeiro 'then': Transforma a resposta bruta
        return resposta.json();
      })
      .then(function (dados) {
        // Segundo 'then' : Usa os dados/lembrando o que ele pegou

        let urlGato = dados[0].url;
        let larguragato = dados[0].width;
        imagem.src = urlGato;
        imagem.style.display = "BLOCK";
        status.innerText = "Gatinhocarregado com sucesso:";
        status.innerText = "Gatinho next " + larguragato + "px de largura";
      })

      .catch(function (erro) {
        // o "catch" trata se algo der errado //
        status.innertText = "Ops! O mensageiro se perdeu.";
        console.error("Erro no fetch", erro);
      });
  }

  function buscarDoguinho() {
    let statusD = document.getElementById("status");
    let imagemD = document.getElementById("foto-pet");

    statusD.innertText = "Buscando Doguinho na nuvem...";

    fetch("https://api.thedogapi.com/v1/images/search")
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (dados) {
        let urlDog = dados[0].url;
        let larguraDog = dados[0].width;
        imagemD.src = urlDog;
        imagemD.style.display = "BLOCK";
        statusD.innerText = "Cachorro carregado com sucesso:";
        statusD.innerText = "Cachorro next " + larguraDog + "px de largura";
      })

      .catch(function (erro) {
        // o "catch" trata se algo der errado //

        statusD.innertText = "Ops! O mensageiro se perdeu.";
        console.error("Erro no fetch", erro);
      });
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #1C2A88",
        marginTop: "10px",
        textAlign: "center",
        maxWidth: "500px",
      }}
    >
      <h2>API Externa: The Cat & Dog API</h2>
      <button
        onClick={buscarGatinho}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Trazer novo Gatinho
      </button>
      <p id="status">aguardando comando...</p>
      <img
        id="foto-pet"
        src=""
        alt="Gato"
        style={{
          width: "250px",
          display: "none",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      ></img>

      <div>
        <button
          onClick={buscarDoguinho}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Trazer novo Cachorrinho
        </button>

        <p id="status">aguardando comando...</p>
        <img
          id="foto-pet"
          src=""
          alt="Doguinho"
          style={{
            width: "250px",
            display: "none",
            margin: "10px auto",
            borderRadius: "10px",
          }}
        ></img>
      </div>
    </div>
  );
}

export default Apiexe2;
