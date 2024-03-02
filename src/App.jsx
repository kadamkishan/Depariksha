import './App.css'
import Navbar from './components/Navbar'
import UpperBar from './components/UpperBar'
import PosterImage from './assets/posterImage.jpg'


function App() {

  return (
   <>
    <div>
      <UpperBar/>
    </div>

    <div>
      <Navbar/>
    </div>

    {/* poster section */}

    <div>
      <img src={PosterImage} className='w-screen' alt="" />
    </div>

    
  
   </>
  )
}

export default App
