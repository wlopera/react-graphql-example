# Consulta a un API a través de APP de recat mediante uso de Graphql

* Proyecto de React  [Create React App](https://github.com/facebook/create-react-app).
* npm start
* http://localhost:3000

## package.json
***
```
{
  "name": "ricmon-graphql",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@apollo/react-hooks": "^4.0.0",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "apollo-boost": "^0.4.9",
    "graphql": "^16.3.0",
    "react": "^17.0.2",
    "react-apollo": "^3.1.5",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
***
```

## index.js
***
```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql/ApolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

***
```

## App.js
***
```
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

***
```

## Queries.js
***
```
import { gql } from "apollo-boost";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
***
```

## ApolloClient.js
***
```
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
});

***
```

## Salida

![Captura](https://user-images.githubusercontent.com/7141537/157552603-85adc833-5609-4417-b911-a97cd17e1b94.PNG)
