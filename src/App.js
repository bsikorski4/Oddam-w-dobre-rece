import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./scss/main.scss"
import Register from "./components/Register";
import Logout from "./components/Logout";


function App() {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                        <Home/>
                </Route>
                <Route path='/logowanie'>
                    <Login/>
                </Route>
                <Route path='/rejestracja'>
                    <Register/>
                </Route>
                <Route path='/wylogowano'>
                    <Logout/>
                </Route>
            </Switch>
        </Router>
    )

}

export default App;
