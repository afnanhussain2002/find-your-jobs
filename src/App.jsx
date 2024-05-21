
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shaerd/header/Header'
import Footer from './shaerd/footer/Footer'

function App() {


  return (
    <>
      <Header/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
