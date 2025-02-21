import AboutUs from './about';
import Home from './home';
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
              <AboutUs/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
