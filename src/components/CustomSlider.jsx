import React, { useState } from 'react';
import { FaArrowCircleLeft,FaArrowCircleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const slideImages = [
    {
     image:   
    '/img/AspireFinalLOGO/png/03.png'
    },
    {
     image:   
    '/img/AspireFinalLOGO/png/02.png'
    }
  ];

export const CustomSlider = () => {

    const [current,setCurrent] = useState(0);
    const length = slideImages.length;

    const [lastYPos, setLastYPos] = React.useState(0);
    const [shouldShowActions, setShouldShowActions] = React.useState(true);

    
  
    React.useEffect(() => {
      function handleScroll() {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShouldShowActions(isScrollingUp);
        setLastYPos(yPos);
      }
  
      window.addEventListener("scroll", handleScroll, false);
  
      return () => {
        window.removeEventListener("scroll", handleScroll, false);
      };
    }, [lastYPos]);

    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrent(current === length-1 ? 0:current + 1);
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, [shouldShowActions]);

    
    if (!Array.isArray(slideImages) || slideImages.length <= 0) {
      return null;
    }
    
    const nextSlide = () => {
      setCurrent(current === length-1 ? 0:current + 1);
    }
    const prevSlide = () => {
      setCurrent(current === 0 ? length-1:current - 1);
    }

    const moveToDot = (index) => {
          setCurrent(index);
    }

   

    return (
      <motion.div className="slider" transition={{ duration: 2 }} animate={{ opacity:shouldShowActions?1:0,scale:1 }} initial={{ scale:0.6 }}>
          <FaArrowCircleLeft  style={{ width:"5%",height:"auto" }}  className="left-arrow"  onClick={prevSlide} />
          <FaArrowCircleRight style={{ width:"5%",height:"auto" }} className="right-arrow" onClick={nextSlide} />
          {slideImages.map((slide,index)=>{
            return (
                <div className={ index === current ? 'slide-active' : "slide-off" } key={index}>
                    {index === current && (<img src={slide.image} className="image" alt="None"/>)}
                </div>
                  )
              
        })}

          <div className="container-dots" >
                {Array.from({length: slideImages.length}).map((item, index) => (
                  <div  key={index} className={current === index ? "dot-active" : "dot"} onClick={() => moveToDot(index)}></div>
                ))}
            </div>  

      </motion.div>    
    );
}

export default CustomSlider;