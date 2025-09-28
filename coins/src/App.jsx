import { useState } from 'react'
import './App.css';
import Header from '../src/components/Header'
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
