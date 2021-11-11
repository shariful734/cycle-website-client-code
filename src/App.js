
import './App.css';
// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NavigationBar from './pages/Shared/NavigationBar/NavigationBar';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import AddProduct from './pages/Admin/AddProduct/AddProduct';
import AllProducts from './pages/AllProducts/AllProducts';
import PlacedOrder from './pages/Orders/PlacedOrder/PlacedOrder';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './pages/Login/Registe/Register';


function App() {
  return (
    <div className="">
      <AuthProvider>

        <Router>

          <NavigationBar></NavigationBar>

          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>

            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>

            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>



          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
