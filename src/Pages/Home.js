import React from 'react'
import Banner from '../Components/Banner/Banner';
import ContactGallery from '../Components/ContactGallery';
import Event from '../Components/Event';
import { Footer } from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import SchoolMsg from '../Components/SchoolMsg';
import Wellcome from '../Components/Wellcome';

const Home = () => {
  return (
    <>
     <Navbar/>
  <Header/>
  <Banner/>
  <Wellcome/>
  <SchoolMsg/>
  <ContactGallery/>
  <Event/>

  <Footer/>
    </>
  )
}

export default Home