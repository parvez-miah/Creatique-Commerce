import React, { useContext, useEffect, useRef, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/authProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {


const { signIn, error,loading, logOut } = useContext(AuthContext);

const navigate = useNavigate();
const location = useLocation();


const from = location.state?.from?.pathname || "/"
    


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Success',
                    'Login Success! Enjoy your Shopping:)',
                    'success'
                )
    });

    navigate(from,{replace:true})

    
};


  return (
      <>
          <Helmet>
              <title>Bistro Boss | Login</title>
          </Helmet>
          <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col md:flex-row-reverse">
                  <div className="text-center md:w-1/2 lg:text-left">
                      <h1 className="text-5xl font-bold">Login now!</h1>
                      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  </div>
                  <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                      <form onSubmit={handleLogin} className="card-body">
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="email" name="email" placeholder="email" className="input input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="password" name="password" placeholder="password" className="input input-bordered" />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          {error && <div className="alert alert-error">
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>{error}</span>
                          </div>}

                          {
                              loading && <span className="loading loading-ring loading-lg"></span>
                          }
                          <div className="form-control mt-6">
                              <input className="btn btn-primary" type="submit" value="Login" />
                          </div>
                      </form>
                      <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Login