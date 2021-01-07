import React from 'react'
import Contact  from './Contacts';
import {BrowserRouter ,Route, Switch, NavLink, Router} from 'react-router-dom';
import MainContent from './mainContent';
import HomePage from './Home';
import Aboutpage from './About';
import Buy from './Buycart';
import history from './history'
export default function Header() {
    return (
        <BrowserRouter>
        <div>
            <nav>
            <div className='logo'>MkShoes</div>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" className="nav">Home</NavLink></li>
            <li><NavLink to="/Products" activeClassName="is-active" className="nav">Our Products</NavLink></li>
            <li><NavLink to="/About" activeClassName="is-active" className="nav">About Us</NavLink></li>
            <li><NavLink to="/Contact" activeClassName="is-active" className="nav">Contact</NavLink></li>
        </ul>
            </nav>
            
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/Products" component={MainContent}  />
            <Route path="/About" component={Aboutpage} />
            <Route path="/Contact" component={Contact} />
            <Router history={history}>
            <Route path="/Buycart" component={Buy} />
            </Router>
        </Switch>
            </div>
        </BrowserRouter>
    )
}
