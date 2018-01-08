import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from '../../css/style.css';

export default class Navigation extends Component {
    

    render(){
        return (
            <div>
            <nav className={"navbar navbar-toggleable-md navbar-light bg-faded"}>
            <button className={"navbar-toggler navbar-toggler-right"} >
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <Link className={"navbar-brand"} href="#">Navbar</Link>
            <div className={"collapse navbar-collapse"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}><Link activeClassName={styles.active} onlyActiveOnIndex to="/">Home</Link></li>
                    <li className={"nav-item"}><IndexLink activeStyle={{color: '#48abee'}} to="/contact">Contact</IndexLink></li>
                    <li className={"nav-item"}><IndexLink activeStyle={{color: '#48abee'}} to="/hello">Hello</IndexLink></li>
                </ul>
            </div>
           
            </nav>
            <div> {this.props.children}</div>
            </div>
        );
   
    }
}
