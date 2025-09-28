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
      <Header />
      <Banner />
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-300"></span>

        <span className="shrink-0 px-4 text-gray-900">Ver mais</span>

        <span className="h-px flex-1 bg-gray-300"></span>
      </span>
      <Table />
      <Footer />
    </>
  );
}

export default App
