import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/authProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button } from '@chakra-ui/react'; // Import Chakra UI components

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password).then((userCredential) => {
            const loggedUser = userCredential.user;
            updateUserProfile(data.name, data.photoURL).then(() => {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            });
        });
    };

    return (
        <div className="font p-12">
            <Helmet>
                <title>Registration | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <h1 className="text-blue-500 text-2xl">Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="name" className="block">
                        <b>Your Name</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        {...register('name', { required: true })}
                        id="name"
                        required
                        className="input input-bordered"
                    />

                    <label htmlFor="email" className="block">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        {...register('email', { required: true })}
                        id="email"
                        required
                        className="input input-bordered"
                    />

                    <label htmlFor="password" className="block">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        {...register('password', { required: true })}
                        id="password"
                        required
                        className="input input-bordered"
                    />

                    <label htmlFor="photoURL" className="block">
                        <b>Profile Photo URL</b>
                    </label>
                    <input
                        type="url"
                        placeholder="Photo URL"
                        name="photoURL"
                        {...register('photoURL', { required: true })}
                        id="photoURL"
                        required
                        className="input input-bordered"
                    />

                    <hr />
                    {error}
                    <div style={{ marginBottom: '20px' }}>
                        <p>
                            By creating an account you agree to our{' '}
                            <Link to="/" className="text-blue-500">
                                Terms & Privacy
                            </Link>
                            .
                        </p>
                        <Button
                            type="submit"
                            colorScheme="teal"
                            alignSelf="center"
                            marginTop="20px"
                            size="lg"
                        >
                            Register
                        </Button>
                    </div>
                    <div className="container signin">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500">
                                Login now
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Register;
