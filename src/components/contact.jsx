import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_9he0ign', 'template_pfgid7i', e.target, 'user_hcBBNwV6ugYcXmcME444y'
      )
      .then(
        (result) => {
          console.log(result.text);
            e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
  }
  return (
    <div>
      <div id='contact' style={{ marginBottom:"5px",borderRadius:"5px" }}>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {/* ???????????????????????????????????????????????????????????????????????????? */}
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        style={{ fontSize:"15px" }}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        style={{ fontSize:"15px" }}
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
                            {/* ???????????????????????????????????????????????????????????????????????????? */}

            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <motion.div whileHover={{ y:-10 }} className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p className='pInContactInfo'>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p className='pInContactInfo'>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p className='pInContactInfo'>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </motion.div>
        {/* ---------------------------------------------------------------------------------- */}
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <motion.li whileHover={{ scale:1.4,y:-10 }}>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale:1.4,y:-10 }}>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale:1.4,y:-10 }}>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* ---------------------------------------------------------------------------------- */}
      </div>

      {/* ---------------------------------------------------------------------------------- */}
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Aspire Technologies{' '}
          </p>
        </div>
      </div>
    {/* ---------------------------------------------------------------------------------- */}
    </div>
  )
}
