import './App.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Social from './Social';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <About />        
        <Contact />
        <Social />
    </div>
  );
}

export default App;
