import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPanel from './components/HomeComponents/LandingPanel';
import ToolOwners from './components/HomeComponents/ToolOwners';
import ToolRenters from './components/HomeComponents/ToolRenters';
import MakesItEasy from './components/HomeComponents/MakesItEasy';
import Contact from './components/HomeComponents/Contact';
import MakesSense from './components/HomeComponents/MakesSense';
import Form from './components/HomeComponents/Form';
import Footer from './components/HomeComponents/Footer';

export default function Home() {
  return (
    <div className="globalContainer">
      
      <LandingPanel />
      <ToolOwners />
      <ToolRenters />
      <MakesItEasy />
      <Contact />
      <MakesSense />
      <Form />
      <Footer />
    </div>
  )
}
