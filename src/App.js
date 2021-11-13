
import './App.css';
// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home/Home';

import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';

import AllProducts from './pages/AllProducts/AllProducts';

import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './pages/Login/Registe/Register';
import PlacedOrder from './pages/Orders/PlacedOrder/PlacedOrder';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import NotFound from './pages/NotFount/NotFound';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="body-container">
      <AuthProvider>

        <Router>



          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            {/* <Route path="/Review">
              <Review></Review>
            </Route> */}

            {/* <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route> */}

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>



            <PrivateRoute path="/placedOrder/:orderId">
              <PlacedOrder></PlacedOrder>
            </PrivateRoute>

            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>



            <Route path="/register">
              <Register></Register>
            </Route>



            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>



          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
