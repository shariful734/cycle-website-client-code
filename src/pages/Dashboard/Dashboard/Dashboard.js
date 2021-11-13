import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {

    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../Admin/AddProduct/AddProduct';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../../Admin/ManageAllOrder/ManageAllOrder';
import Payment from '../../Orders/Payment/Payment';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../Review/Review'
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    console.log(admin);

    return (
        <div className="vh-100">
            <div className="dashboard-header bg-primary d-flex align-items-center justify-content-center">

                <h1>Dashboard</h1>

            </div>
            <Row className="g-0">
                <Col sm={2} md={2} lg={2} className=" menu d-flex align-items-center justify-content-center">
                    <div>
                        <Button onClick={logOut} className="my-3">LogOut</Button>



                        {
                            admin ? <div>
                                <p> <NavLink className="link" to={`${url}/makeAdmin`}>Make Admin</NavLink></p>
                                <p> <NavLink className="link" to={`${url}/manageAllOrder`}>Manage All Orders</NavLink></p>
                                <p> <NavLink className="link" to={`${url}/manageProduct`}>Manage Product</NavLink></p>
                                <p>  <NavLink className="link" to={`${url}/addProduct`}>Add Product</NavLink></p>
                            </div>
                                : <div>
                                    <p>  <NavLink className="link" to={`${url}`}>My Orders</NavLink></p>
                                    <p> <NavLink className="link" to={`${url}/payment`}>Payment</NavLink></p>
                                    <p> <NavLink className="link" to={`${url}/review`}>Review</NavLink></p>

                                </div>
                        }

                    </div>

                </Col>
                <Col sm={10} md={10} lg={10} className="text-center">

                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>

                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>

                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>

                        <Route path={`${path}/manageAllOrder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </Route>

                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch>

                </Col>



            </Row>
        </div >

    );
};

export default Dashboard;