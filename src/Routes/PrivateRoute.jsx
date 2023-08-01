import React, { useContext } from 'react'
import { AuthContext } from '../Provider/authProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    }


    if (user){
        return children;
    }

    

    return <Navigate to ="/login" state={{from:location}}></Navigate>

  
}

export default PrivateRoute