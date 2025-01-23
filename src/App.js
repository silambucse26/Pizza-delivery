import Navbar from './components/navbar'; 
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu  from './pages/Menu'
import About from './pages/About';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu' exact Component={Menu} />
        <Route path='/about' exact Component={About} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
