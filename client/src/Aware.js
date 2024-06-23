import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles1.css'; // Assuming this file contains your custom styles

const ServicesComponent = () => {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Our Services Section</title>
        </head>
        <body>
            <section className="services text-center py-5">
                <h2>AWARENESS</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Make a Difference</h4>
                                <p>Contribute to meaningful projects that have a direct impact on communities.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Learn and Grow</h4>
                                <p>Gain new skills, experiences, and perspectives.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Connect and Collaborate</h4>
                                <p>Work with a diverse group of passionate individuals.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Volunteer Your Time</h4>
                                <p>Join our programs and initiatives to make a hands-on impact.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Donate</h4>
                                <p>Support our efforts financially to help us reach more people.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-box bg-white border rounded p-4 shadow-sm">
                                <h4>Spread the Word</h4>
                                <p>Share our mission and work with your network to raise awareness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
        </html>
    );
};

export default ServicesComponent;
