import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

const PrivateRoute = ({ allowedRoles }) => {
    const { user, loaded } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && loaded) {
            navigate('/login-user');
        }
        if (user && !allowedRoles.includes(user.roleId) && loaded) {
            navigate('/');
        }
    }, [user, navigate, allowedRoles, loaded]);

    return user && allowedRoles?.includes(user.roleId) ? <Outlet /> : '';
};

export default PrivateRoute;