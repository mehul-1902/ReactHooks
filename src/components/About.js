import React, { useState} from 'react';
import {Link, Switch} from 'react-router-dom';
import './About.css';

export const Home = () => {
    const [toggleState, setToggleState] = useState(2)

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
            <section className="about">
                Hello there, This is an About Page.
                <p>Consequat cupidatat do velit consectetur. Fugiat voluptate quis tempor nisi do elit dolor id velit laborum excepteur pariatur quis. Anim aute excepteur ex pariatur aliquip sint voluptate Lorem excepteur elit elit qui voluptate amet. Anim laboris adipisicing qui ea quis labore sint. Enim labore ad voluptate fugiat sit ut Lorem est proident velit laborum voluptate ut. Consequat ad dolore anim aliqua nisi sunt tempor. Enim in laboris aliqua veniam laborum occaecat commodo elit Lorem minim ullamco esse labore.
                </p> 
            </section>
            </>
        )
}

export default Home;    
