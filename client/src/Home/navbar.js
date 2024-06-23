import React from 'react';
import './styles.css';

const HomePage = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">SUBHIKSHA</div>
                    <nav>
                        <ul>
                        <li><a href="#" class="active">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Awareness</a></li>
                        <li><a href="../govt.html">GOVT schemes</a></li>
                        <li><a href="#">Sign-in/Sign-up</a></li>
                        <li><a href="#">Near by Centres</a></li>
                        </ul>
                    </nav>
                    <div className="Help Desk">+91-99080 76899</div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
