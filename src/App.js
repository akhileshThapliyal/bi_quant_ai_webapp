import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage';


function App() {
  return(
    <div className="wrapper d-flex flex-column justify-between">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
