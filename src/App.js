import React from 'react';
import './App.css';
import Nav from "./components/Layout/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Details from "./components/Details";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" exact component={Shop}/>
                        <Route path="/shop/:id" component={Details}/>
                    </Switch>
                </main>

            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};
export default App;
