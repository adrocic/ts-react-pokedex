import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Pokedex from "./Views/Pokedex/Pokedex";
import PokemonDetail from "./Views/PokemonDetail/PokemonDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import customTheme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={customTheme}>
          <Router>
            <Switch>
              <Route exact path="/pokedex" component={Pokedex} />
              <Route path="/pokedex/:id" component={PokemonDetail} />
            </Switch>
          </Router>
        </ChakraProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
