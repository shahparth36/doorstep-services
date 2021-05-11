import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FilterMaps from './FilterMaps';
import Home from './Home';
import CityInput from './CityInput';

function App() {
    return (
        <Switch>
            <Route
                exact
                path="/filters/:city"
                render={(routeProps) => <FilterMaps cityName={routeProps.match.params.city} />}
            />
            <Route exact path="/city" render={() => <CityInput />} />
            <Route exact path="/" render={() => <Home />} />
        </Switch>
    );
}

export default App;
