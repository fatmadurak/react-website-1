import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>


     <Router>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
     </Router>
   

    </>

  );
}

export default App;
