import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage';


function App() {
  return(
  //  <Router>
<div className="wrapper d-flex flex-column justify-between">
      <Header/>
      <HomePage/>
      <Footer/>
      
    </div>
// {/* <nav> */}
//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/contact">Contact</Link></li>
//   </ul>
// // </nav> */}

// {/* Define the Routes */}
// {/* <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/contact" element={<Contact />} /> */}
// {/* </Routes> */}
// // </Router>

  );
}

export default App;
