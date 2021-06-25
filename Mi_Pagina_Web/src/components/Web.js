import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Servicios from './Servicios.js'
import Home from './Home.js'
import Nosotros from './Nosotros.js'

function Web(){
  return (
    <div>
    <Switch>
            <Route exact path="/">
                    <Home />
            </Route>
            <Route exact path="/servicios">
                    <Servicios />
            </Route>
            <Route exact path="/nosotros">
                    <Nosotros />
            </Route>
    </Switch>

    </div>
  )
  

}
export default Web;

