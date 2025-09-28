import { useState } from 'react'
import './App.css';
import Header from '../src/components/Header'
import Footer from './components/Footer';
import Banner from './components/Banner';
import Table from './components/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Table/>
      <Footer/>
    </>
  )
}

export default App
