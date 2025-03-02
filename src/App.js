import AboutUs from './about';
import Blog from './blog';
import Contact from './contact';
import Footer from './footer';
import Home from './home';
import Login from './login';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
        <Footer />

      </div>
    </Router>
  );
}

const Log = () => {
  return (
    <Router>
      <div className='App'>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  )
}
export default App;
