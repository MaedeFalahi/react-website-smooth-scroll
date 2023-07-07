import React ,{useState} from 'react';
import  Sidebar from './../components/Sidebar/index';
import  Navbar  from './../components/navbar/index';
import HeroSection from './../components/HeroSection/index';
import InfoSection from '../components/InfoSection/index';
import Services from '../components/Services/index';
import Footer from '../components/Footer/index';
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
const Home = () => {

  const [isOpen , setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  };

  return (
    <React.Fragment>
        <Sidebar isOpen={isOpen}  toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer />
    </React.Fragment>
  )
}

export default Home;