import React from "react";

function MonitorCombustivel() {
  function VerificarTan() {
    var nivel = document.getElementById("input-litros").value;
    var painel = document.getElementById("visor");

    if (nivel < 20) {
      painel.innerText = "🔴 Alerta: Abasteça agora!";
    } else if (nivel < 50) {
      painel.innerText = "🟡 Atenção: Nível médio.";
    } else {
      painel.innerText = "🟢 Tanque cheio. Boa viagem!";
    }
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Logística TRANSPORTADORA - Nível de Combustível</h3>
      <input
        id="input-litros"
        type="number"
        placeholder="Digite litros restantes"
      />
      <button onClick={VerificarTan}>Verificar</button>
      <h2 id="visor">---</h2>
    </div>
  );
}

export default MonitorCombustivel;
