function Carro(props) {
  return (
    <div>
      <h2>{props.carro.nome}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>Flex: {props.carro.flex}</li>
        <li>Adicionado por: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;
