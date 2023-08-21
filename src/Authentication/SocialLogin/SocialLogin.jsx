import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/authProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
      console.log('user profile info updated');
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            navigate('/');
          }

          navigate(from, { replace: true });
        });
      console.log(loggedInUser);
    });
  };

  return (
    <div className="flex items-center justify-center mt-6 mb-4 ml-[-12px]">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-primary btn-sm "
      >
        <FaGoogle className="mr-2" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
