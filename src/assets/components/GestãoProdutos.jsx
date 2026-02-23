import { listaProdutos } from "../Dados/data";

function GestãoProdutos() {
  const verificarDisponibilidade = (quantidade) => {
    let mensagem = "";

    if (quantidade === 0) {
      mensagem = "Item indisponível no momento";
    } else if (quantidade < 5) {
      mensagem = "Atenção: Poycas unidades restantes";
    } else {
      mensagem = "Produto em estoque";
    }

    return mensagem;
  };

  // Função para definir o departamento

  const formatarCategoria = (cat) => {
    let textoFormatado = "";
    if (cat === "Periféricos") {
      textoFormatado = "Setor de Hardware e Entrada";
    } else if (cat === "Video") {
      textoFormatado = "Setor de Monitores e Telas";
    } else {
      textoFormatado = "Setor Geral";
    }

    return textoFormatado;
  };

  // Verificação de segurança //

  if (listaProdutos.length === 0) {
    return (
      <div>
        <h1>Aviso</h1>
        <p>Não existem produtos cadastrados</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Painel de Inventário</h1>

      {listaProdutos.map((item) => (
        <div key={item.id}>
          <h3>Produto : {item.nome}</h3>

          <ul>
            <li>Quabtidade: {item.estoque}</li>
            <li>Status: {verificarDisponibilidade(item.estoque)}</li>
            <li>Localização: {formatarCategoria(item.categoria)}</li>
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default GestãoProdutos;
