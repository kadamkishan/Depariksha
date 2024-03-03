import './App.css'
import Navbar from './components/Navbar'
import UpperBar from './components/UpperBar'
import PosterImage from './assets/posterImage.jpg'
import Features from './components/Features'
import Exams from './components/Exams'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


function App() {

  return (
   <div>
    <div className='w-screen'>
      <UpperBar />
    </div>

    <div className='w-screen'>
      <Navbar/>
    </div>

    {/* poster section */}

    <div>
      <img src={PosterImage} className='w-screen' alt="" />
    </div>

    {/* features */}

    <div className='w-screen mt-10'>
    <div className='text-[25px] font-bold text-center opacity-55'>FEATURES</div>
      <Features/>
    </div>

    {/* Exams */}

    <div className='w-screen mt-5'>
    <div className='text-[25px] font-bold text-center opacity-55'>Exams</div>
      <Exams/>
    </div>
  

    <div className='w-screen mt-5'>
      <div className='text-[25px] font-bold text-center opacity-55'>
        TESTIMONIALS
      </div>
      <Testimonials/>
    </div>

    <div className='w-screen mt-5 bottom-0 left-0  z-10'>
      <Footer/>
    </div>
  
   </div>
  )
}

export default App
