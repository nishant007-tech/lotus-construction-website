import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services';
import ContactUs from './components/contact-us';
import Create from './components/create';
import ShowList from './components/showList';
// import ContactUs from './components/';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/contact-us' component={ContactUs}></Route>
        <Route exact path='/e-market' component={ShowList}></Route>
        <Route exact path='/publish-requirement' component={Create}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
