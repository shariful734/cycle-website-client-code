import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://rocky-island-88656.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added a data successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="add-product vh-100">

                <h1 className="text-primary text-center m-3">Please Add A Product</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("productName", { required: true, maxLength: 20 })} placeholder="product name" />
                    <textarea  {...register("description",)} placeholder="description" />
                    <input {...register("img",)} placeholder="img URL" />
                    <input {...register("price",)} placeholder="price" />

                    <button className="bg-success" type="submit" >add Now</button>
                </form>

            </div >
        </div>
    );
};

export default AddProduct;