import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="w-screen h-screen bg-black">
       <Navbar/>
       <hr className='mx-4  mt-1 '></hr>
       <Hero/>
       <Footer/>
    </div>
  );
}

export default App;
