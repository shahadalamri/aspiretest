import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  '/img/portfolio/01-large.jpg',
  '/img/portfolio/02-large.jpg',
  '/img/portfolio/04-large.jpg'
];

export default function Slideshow () {
    return (
      <div className="slide-container">
        <Slide>
              <div className="each-slide" style={{ textAlign:"center",paddingTop:"100px",paddingBottom:"20px" }}>
                    <img className="image" src={slideImages[0]} alt="presentation 1" />
              </div>
              <div className="each-slide" style={{ textAlign:"center",paddingTop:"100px",paddingBottom:"20px" }}>
                  <img className="image" src={slideImages[1]} alt="presentation 1" />
              </div>
              <div className="each-slide" style={{ textAlign:"center",paddingTop:"100px",paddingBottom:"20px" }}>
                  <img className="image" src={slideImages[2]} alt="presentation 1" />
              </div>
        </Slide>
      </div>
    )
}