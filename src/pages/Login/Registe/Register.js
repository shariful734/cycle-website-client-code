import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Register = () => {

    const { registerUser, isLoading, user, authError } = useAuth();

    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data.email);
        if (data.password !== data.password2) {
            alert('your password did not matched');
            return
        }
        registerUser(data.email, data.password, data.name, history);
        reset();
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="add-product  text-center vh-100">

                <h1 className="text-primary m-3">Register</h1>

                {!isLoading &&
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name",)} placeholder="your name" />
                        <input {...register("email",)} placeholder="your email" />
                        <input type="password" {...register("password",)} placeholder="password" />
                        <input type="password"{...register("password2",)} placeholder="re-type password" />

                        <button className="bg-success px-5 py-1 " type="submit" >Register</button>

                    </form>
                }

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

                {
                    isLoading && <Spinner animation="border" variant="danger" />
                }

                <NavLink to="/login"><h5 className="my-4 text-center">Already Register? please Login</h5></NavLink>

            </div>
        </div>
    );
};

export default Register;