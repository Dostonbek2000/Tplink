import React from 'react'
import Navbar from './../components/Navbar/Navbar';
import Homecomponent from '../components/Home/Home';
import SignalOne from './../components/SignalOne/SignalOne';
import SignalTwo from '../components/SignalTwo/SignalTwo';



const Home = () => {
  return (
    <div>
        <Navbar />
        <Homecomponent />
        <SignalOne />
        <SignalTwo />
    </div>
  )
}

export default Home