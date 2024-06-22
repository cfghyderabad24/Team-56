import React from 'react';
import NavBar from './navbar';
import './styles.css';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <section className="hero">
                <div className="container">
                    <div className="hero-text">
                        <h1>"Disability is not a barrier to capability; it's an opportunity to showcase extraordinary strength."</h1>
                        <p>Together, we can turn challenges into triumphs, doubts into determination, and disabilities into capabilities</p>
                    </div>
                    <div className="hero-image">
                        <div className="horizontal-scroll">
                            <img src="https://wecapable.com/wp-content/uploads/2017/05/stephen-hawking-wecapable.jpg" alt="Image 1" />
                            <img src="https://give.do/blog/wp-content/uploads/2021/12/Disability-NGO.jpg" alt="Image 2" />
                            <img src="https://static.sadhguru.org/d/46272/1635531387-1635531386358.jpg" alt="Image 3" />
                            {/* Add more images or content here */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
