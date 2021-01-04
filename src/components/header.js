import React from 'react'
import Contact  from './Contacts';
import {BrowserRouter ,Route, Switch, NavLink} from 'react-router-dom';
import Modal from 'react-modal';
import MainContent from './mainContent';
const sp=()=>
{
    return <div ><Modal isOpen={true}>
        <h1>MKSHOES</h1>
        </Modal></div>
}
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
            <Route path="/" component={"prem"} exact={true}/>
            <Route path="/products" component={MainContent} />
            <Route path="/Contact" component={Contact}/>
        </Switch>
            </div>
        </BrowserRouter>
    )
}
