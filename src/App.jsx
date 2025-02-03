import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div>
      <Main/>
     <Footer/>
    </div>
  )
}

export default App
