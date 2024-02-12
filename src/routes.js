import React from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Home from "./container/Home";
import Carrinho from "./container/users";


function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path= "/" component={Home}/>
                <Route exact path="/carrinho" component={Carrinho}/>
            </Switch>
        </Router>

    );

}



export default Routes