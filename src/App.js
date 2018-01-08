
import React, { Component } from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import Home from './component/Home';
import Navigation from './component/navigation/Navigation';
// eslint-disable-next-line 
const styles = require('bootstrap/dist/css/bootstrap.min.css');

// eslint-disable-next-line 
const maincss = require('./css/style.css');

class App extends Component {
   

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
    )
   
    }
}

// const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>

const PageNotFound = () => <h1>404 Not Found</h1>;

export default App