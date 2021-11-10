
import './App.css';
// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="">

      <Router>

        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">

          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
