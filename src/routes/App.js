import React from "react";
import Empresa from '../pages/Empresa';
import Web from '../pages/Web';
import Home from '../pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App () {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/web">
                        <Web/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/empresa">
                        <Empresa/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}export default App;