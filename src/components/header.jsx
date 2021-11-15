import React from 'react';
import FormDialog from "./FormDialog"
// import CustomSlider from "./CustomSlider";
import Grid from '@material-ui/core/Grid';
// import Slide from "./Slideshow";
import { motion } from 'framer-motion';

export const Header = (props) => {

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
  return (
        //------------------------------------------Not used  
        // <header id='header'>
        //  <div className='overlay'>
            // <div className='row'>
         <div className="intro" style={{ paddingBottom:"5px" }}>
              <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      style={{ position:"absolute",zIndex:"5" }}
                    >
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                              <motion.div className="intro-text" transition={{ opacity: { duration: 3 },translateY:{ duration:3  } }} animate={{ opacity: shouldShowActions ? 1 : 0,translateY:"0px" }} initial={{ opacity:0,translateY:"-150px"  }}>
                                <img alt="Header" className="imageHeader" src={"./img/AspireFinalLOGO/png/AspireLogofinal619.svg"} width="55%" height="auto"/>
                                <h1 style={{ fontSize:"4.6vw",color:"#fff",margin:"0" }}>
                                  {props.data ? props.data.title : 'Loading'}
                                </h1>
                                <p style={{ fontSize:"1.5vw",color:"#fff" }}>(an <a href="https://exeder.com/" target="_blank" rel="noopener noreferrer" ><span  style={{ color:"#44849c",fontWeight:'bold' }}>EXEDER</span></a> company)</p>
                                  <FormDialog /> 
                                  </motion.div>
                          </Grid>

                         {/* <Grid item xs={6} sm={6} md={6} lg={6}>
                            {/* not Used */}
                            {/* <Slide /> */}

                            {/* <CustomSlider /> */}
                         {/* </Grid> */}

                   </Grid>
                   
              <video id="background-video" style={{ borderRadius:"5px" }} src="/img/AspireFinalLOGO/png/video1.mp4" loop autoPlay muted playsInline>
              </video>
           </div>
      //  </div>
      // </div> 
    // </header>
  )
}



