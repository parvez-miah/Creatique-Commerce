import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { createContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/authProvider'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'
import SocialLogin from '../SocialLogin/SocialLogin'
import './Registration.css'
import { Button, ButtonGroup } from '@chakra-ui/react'


const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"


    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')



    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(userCredential => {
                const loggedUser = userCredential.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })

            })
    };

    return (
        <div className="font">
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="container">
                    <h1 style={{color:'blue', fontSize:'25px'}}>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="text"><b>Your Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" {...register("name", { required: true })} id="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" {...register("email", { required: true })} id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password"  {...register("password", { required: true })} id="psw" required />

                    <label htmlFor="psw"><b>Profile Photo URL</b></label>
                    <input type="url" placeholder="Photo URL"  {...register("photoURL", { required: true })} id="psdw" required />


                    <hr />
                    {error}
                    <div style={{ marginBottom: '20px' }}>
                        <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                        <Button type="submit" colorScheme='teal' alignSelf="center" marginTop='20px' size='lg'>
                            Register
                        </Button>
                        {/* <button type="submit" className="registerbtn">Register</button> */}
                    </div>
                    <div className="container signin">
                        <p>Already have an account? < Link to="/login">Login now</Link>.</p>
                    </div>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Register