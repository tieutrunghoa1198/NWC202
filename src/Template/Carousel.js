import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselWithIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <ol className="carousel-indicators">
                    <li data-target="#carouselWithIndicators" data-slide="0" className="active">

                    </li>
                    <li data-target="#carouselWithIndicators" data-slide="1" className="">

                    </li>
                    <li data-target="#carouselWithIndicators" data-slide="2" className="">

                    </li>
                </ol>
                <div className="carousel-item carousel-image-1 active">
                    <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                        alt="first slide"
                        className="d-block w-100" />
                    <div className="carousel-caption overlay">
                        <h3 className="text-capitalize">Welcome to Voicebot</h3>
                        <p className="text-capitalize">Bot assistance</p>
                    </div>
                </div>
                <div className="carousel-item carousel-image-2 ">
                    <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1295&q=80"
                        alt="second slide"
                        className="d-block w-100" />
                    <div className="carousel-caption overlay">
                        <h3 className="text-capitalize">text to speech</h3>
                        <p className="text-capitalize">It will convert machine language to a human voice</p>
                    </div>
                </div>
                <div className="carousel-item carousel-image-3 ">
                    <img src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                        alt="third slide"
                        className="d-block w-100" />
                    <div className="carousel-caption overlay">
                        <h3 className="text-capitalize">Speech to text</h3>
                        <p className="text-capitalize">It will convert your voice to machine language</p>
                    </div>
                </div>

                <a href="#carouselWithIndicators" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a href="#carouselWithIndicators" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
