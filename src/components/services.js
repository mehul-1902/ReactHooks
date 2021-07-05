import React, { useState} from 'react';
import {Link, Switch} from 'react-router-dom';
import './Services.css';

export const Services = () => {
    const [toggleState, setToggleState] = useState(3)

    const toggle = (index) =>
    {
        setToggleState(index);
    }
        return (
            <>
            <div className="sidebar">
                <ul>
                    <li><Link onClick={() => toggle(1)}  className={toggleState === 1 ? "active" : ""} to="/">Dashboard</Link></li>
                    <li><Link onClick={() => toggle(2)}  className={toggleState === 2 ? "active" : ""} to="/about">About</Link></li>
                    <li><Link onClick={() => toggle(3)}  className={toggleState === 3 ? "active" : ""} to="/services">Services</Link></li>
                    <li><Link onClick={() => toggle(4)}  className={toggleState === 4 ? "active" : ""} to="/contact">Contact</Link></li> 
                </ul>
       
            </div>
            <section>
                This is Services Page.  
            </section>
            </>
        )
}

export default Services;    
