import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        setEmail(data.email)
        const user = { email };
        console.log(user);
        fetch('https://rocky-island-88656.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('successfully made an admin')
                    reset();
                }
            })

    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("email",)} placeholder=" email" />

                <Button type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;