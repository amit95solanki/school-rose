
import './App.css';
import Banner from './Components/Banner/Banner';
import ContactGallery from './Components/ContactGallery';
import Event from './Components/Event';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import SchoolMsg from './Components/SchoolMsg';


import Wellcome from './Components/Wellcome';
import Home from './Pages/Home';

import { Routes,Route } from 'react-router';

function App() {
  return (
  <>
  {/* <Navbar/>
  <Header/>
  <Banner/>
  <Wellcome/>
  <SchoolMsg/>
  <ContactGallery/>
  <Event/>

  <Footer/> */}
  
<Routes>
  <Route path="/" element={<Home/>} />
</Routes>

  
  

  </>
  );
}

export default App;
