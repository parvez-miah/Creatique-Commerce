import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, error, loading, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                    },
                });
                navigate(from, { replace: true });
            });
    };

    return (
        <Container>
            <Helmet>
                <title>Login | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="font p-12">
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h1 className="text-blue-500 text-2xl">Login</h1>
                        <p>Please fill in this form to Login an account.</p>
                        <hr />

                        <label htmlFor="email" className="block">
                            <b>Email</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            required
                            className="input input-bordered mb-4"
                        />

                        <label htmlFor="password" className="block">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            id="password"
                            required
                            className="input input-bordered mb-4"
                        />
                        <hr />

                        <div>
                            <Button
                                type="submit"
                                colorScheme="teal"
                                alignSelf="center"
                                marginTop="4"
                                size="lg"
                                marginBottom="20px"
                            >
                                Login
                            </Button>
                        </div>

                        <div className="container signin">
                            <p>
                                Don't have an account?{' '}
                                <Link to="/register" className="text-blue-500">
                                    Register now
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </form>

                <div className="font">
                    <SocialLogin />
                </div>
                <br />
            </div>
        </Container>
    );
};

export default Login;
