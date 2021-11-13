
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Review = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://rocky-island-88656.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('review was successfully');
                    reset();
                }
            })

    }

    return (
        <div>
            <div className="add-product vh-100">

                <h1 className="text-primary text-center m-3">Give Us Your Review</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input value={user.displayName} {...register("customerName")} />
                    <textarea  {...register("reviewText",)} placeholder="Write Your Review Here" />

                    <input {...register("rating", { min: 1, max: 5 })} placeholder="Give Rating In Number (max 5)" />

                    <button className="bg-success px-5 py-1" type="submit" >Post</button>
                </form>

            </div >
        </div>
    );
};

export default Review;