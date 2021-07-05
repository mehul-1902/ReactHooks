import React, { useState} from 'react';
import {Link, Switch} from 'react-router-dom';
import './home.css';

export const Home = () => {
    const [toggleState, setToggleState] = useState(1)

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
                       
                <div className="card">
                    <h2>CPM</h2>
                    <p>$21.00</p>
                    <p>Proident aliqua duis sint exercitation adipisicing exercitation culpa.</p>
                </div>
                <div className="card">
                    <h2>Estimeted Revnue</h2>
                    <p>$20,000</p>
                    <p>Elit mollit officia exercitation eiusmod sint laboris aute irure exercitation.</p>
                    
                </div>      
                <div className="card">
                    <h2>This Month</h2>
                    <p>Nulla aute esse et mollit ipsum velit nisi ex.</p>
                </div>                
                <div className="card">
                    <h2>Yesterday</h2>
                    <p>Amet cillum voluptate do mollit.</p>
                </div>   
            </section>
            </>
        )
}

export default Home;    
