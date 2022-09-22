import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

const PrivateRoute = ({ allowedRoles }) => {
    const navigate = useNavigate();
    const user = useUserContext();
    
    useEffect(() => {
        if (!user) {
            navigate('/login-user');
        }
        if (user && !allowedRoles.includes(user.roleId)) {
            navigate('/');
        }
    }, [user, navigate, allowedRoles]);

    return user && allowedRoles?.includes(user.roleId) ? <Outlet /> : '';
};

export default PrivateRoute;