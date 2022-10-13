import Carro from "./Carro";

function Garagem(props) {
  return (
    <section>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={() =>props.apresentaGaragem(props.nome)}>Clique aqui</button>
      <Carro carro={props.carro1} adicionadoPor={props.adicionadoPor}/>
      <Carro carro={props.carro2} adicionadoPor={props.adicionadoPor}/>
      <Carro carro={props.carro3} adicionadoPor={props.adicionadoPor}/>
      <Carro carro={props.carro4} adicionadoPor={props.adicionadoPor}/>
    </section>
  );
}

export default Garagem;
