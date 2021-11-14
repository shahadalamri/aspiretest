import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Partners } from './components/partners'
import {  Services } from './components/services'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Industries } from './components/industries'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})


const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} /> 
      <Industries data={landingPageData.Industries}/>
     
       <Partners /> 

      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />   
      </div>
  )
}

export default App
