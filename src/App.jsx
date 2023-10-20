
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  useEffect(() => {
    Aos.init()
  }, [])

  return (


    <div>
      <Navbar></Navbar>
      <div className='m-5 md:m-20'>
        <Banner></Banner>
        <h1 className='text-6xl text-center text-purple-600 my-20'>Product List</h1>
        <div className='grid md:grid-cols-2 gap-6 '>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}

            ></CoffeeCard>)
          }
        </div>
        <About></About>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>

  )
}

export default App
