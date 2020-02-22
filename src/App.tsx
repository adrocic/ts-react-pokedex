import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Pokedex from './Views/Pokedex/Pokedex';
import PokemonDetail from './Views/PokemonDetail/PokemonDetail';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import customTheme from './theme';

function App(): JSX.Element {
    return (
        <div className="App">
            <ThemeProvider theme={customTheme}>
                <CSSReset />
                <Router>
                    <Switch>
                        <Route path="/" exact render={(): JSX.Element => <Redirect to={'/pokedex'} />} />
                        <Route exact path="/pokedex" component={Pokedex} />
                        <Route path="/pokedex/:id" component={PokemonDetail} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
