import { useQuery } from "react-apollo";
import "./App.css";
import { GET_CHARACTERS } from "./graphql/Queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const load = loading && <p>Cargando...</p>;

  return (
    <div>
      <h1>EJEMPLOS - GRAPH_QL</h1>
      <hr />
      {load}
      {data &&
        data.characters.results.map((character) => {
          return (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <img src={character.image} alt="imagen" />
            </div>
          );
        })}
    </div>
  );
};

export default App;
