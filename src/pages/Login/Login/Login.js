import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Login = () => {

    const { user, login, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        login(data.email, data.password, location, history)
        console.log(data.email);
        reset();
    }
    return (
        <div>
            <NavigationBar></NavigationBar>

            <div className="add-product text-center vh-50">

                <h1 className="text-primary  m-3">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("email",)} placeholder="your email" />
                    <input type="password" {...register("password",)} placeholder="password" />

                    <button className="bg-success px-5 py-1 " type="submit" >Login</button>
                    <NavLink to="/register"><h5 className="my-4">New User? please Register </h5></NavLink>
                    {
                        isLoading && <Spinner animation="border" variant="danger" />
                    }
                </form>

                {
                    user?.email && <Alert variant="info">
                        user created successfully
                    </Alert>
                }
                {
                    authError && <Alert variant="danger">
                        {authError}
                    </Alert>
                }

            </div>
        </div>
    );
};

export default Login;