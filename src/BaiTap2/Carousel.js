import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0}  />
                    <li data-target="#demo" data-slide-to={1}  />
                    <li data-target="#demo" data-slide-to={2} className="active" />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="img/slide_1.jpg" alt="Los Angeles" width="100%" height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide_2.jpg" alt="Chicago" width="100%" height={500} />
                    </div>
                    <div className="carousel-item active">
                        <img src="img/slide_3.jpg" alt="New York" width="100%" height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        )
    }
}
