import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Partners = (props) => {
  const classes = useStyles();

  return (
    <div id='partners' style={{ marginBottom:"150px",borderRadius:"5px" }}>
      <div>
      <video id="background-video2" style={{ borderRadius:"5px",position:"absolute" }} src="/img/AspireFinalLOGO/png/video4.mp4" loop autoPlay muted playsInline/>
            <div className='container' style={{ left:"20%" }}>
              <div style={{ marginTop:"60px" }}>
                <Grid
                  container
                  justifyContent="center"
                >
                <Grid item xs={12} sm={8} md={8}>  

                        <Card className={classes.root} variant="outlined" style={{borderRadius:"15px",opacity:"0.8" }}>
                              <CardContent>
                                  <h2 style={{ textAlign:"center",margin:"0",textTransform:"none" }}>Our Partners</h2>
                                  <h2 className="line" style={{ margin:"2 auto" }}> </h2>
                                  <span> </span>  
                                      <div style={{ padding:"25px" }}>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="space-evenly"
                                                alignItems="center"
                                            >
                                                  <motion.div 
                                                      whileHover={{ scale:1.2 }}
                                                  >
                                                        <a href="https://www.outsystems.com/" target="_blank" rel="noopener noreferrer" >
                                                            <img alt="Out system " src="./office/OutSystems-logo.png"  style={{ height:"64px",width:"auto",opacity:1 }} />
                                                        </a>    
                                                  </motion.div>

                                                  <motion.div 
                                                      whileHover={{ scale:1.2 }}
                                                  >
                                                        <a href="https://www.cigniti.com/" target="_blank" rel="noopener noreferrer" >
                                                            <img alt="cigniti " src="./office/cigniti.png" style={{ height:"64px",width:"auto" }} /> 
                                                        </a>     
                                                  </motion.div>
                                            </Grid>   
                                      </div>
                              </CardContent>
                        </Card>
                </Grid>
                
                
                </Grid>
              </div>
            </div> 
            </div>
      </div>
  )
}
