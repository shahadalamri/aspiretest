import { motion } from 'framer-motion';

export const Industries = (props) => {
  return (
    <div id='industries' className='text-center' style={{ borderRadius:"5px",marginBottom:"5px" }}>
      <div className='container'>
        <div className='section-title'>
          <h2>Industries </h2>
       
        </div>
        <div className='rowForIndustries'>
          {props.data
            ? props.data.map((d, i) => { return( 
              // <div key={`${d.name}-${i}`} className='col-md-4' id="moveUp">
                <motion.div whileHover={{ y: -40 }} whileDrag={{ y:-40 }} key={`${d.name}-${i}`} className='col-md-4'>
              {' '}
                  <i className={d.icon}></i>
                  <div className='industries-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </motion.div>
              )})
            : 'loading'}
        </div>
      </div>
    </div>
  )
}


