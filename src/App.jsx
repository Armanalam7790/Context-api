import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'

const App = () => {
  return (
    <div className='text-white bg-black h-screen w-screen'>
      <Navbar />
     
      {/* </Navbar> */}

      <Section>
        <h1>halku ree</h1>
      </Section>
      <Footer />
    </div>
  )
}

export default App