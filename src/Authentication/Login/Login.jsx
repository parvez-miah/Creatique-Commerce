import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin'
import { Button, ButtonGroup } from '@chakra-ui/react'



const Login = () => {

    const { signIn, error, loading, logOut } = useContext(AuthContext);
     
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"



    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    }


    return (
        <Container>
            <div className="font">
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h1 style={{ color: 'blue', fontSize: '25px' }}>Login</h1>
                        <p>Please fill in this form to Login a account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="psw" required />
                        <hr />

                        <div>
                           
                            <Button type="submit" colorScheme='teal' alignSelf="center" marginTop='20px' size='lg'>
                                Login
                            </Button>
                        </div>

                        <div className="container signin">
                            <p>Dont have an account? < Link to="/register">Register now</Link>.</p>
                        </div>
                    </div>
                </form>

                

                <div className="font">
                    <SocialLogin></SocialLogin>
                </div>
                <br />



            </div>
        </Container>
    )
}

export default Login