import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.png'
import { useUserContext } from '../../context/UserProvider';
import { linksPublic, linksLoguedUser } from '../../data/headerData';
import Button from '../Buttons/Buttons';

const Header = () => {
  const [ links, setLinks ] = useState([]);
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    user ? setLinks(linksLoguedUser) : setLinks(linksPublic)
  }, [user])

  const handleToggleUser = (setUser, user) => {
    sessionStorage.removeItem('token');
    setUser(null);
  }

    return (
      <div className="bg-slate-100 px-5 py-4 shadow-md shadow-gray-400">
        <div className="h-full flex justify-between items-center">
          <div className="image-container">
            <img onClick={() => navigate('/')} className="min-w-full w-14 h-9 md:w-20 md:h-11 " src={Logo} alt='Logo' />
          </div>
          <div className="flex align-center gap-5 justify-between">
            <ul className="gap-4 items-center hidden md:flex">
              {links.map((link) => (
                <NavLink to={`${link.route}`} style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : { fontWeight: 'initial' })} key={link.id} className="text-sm">
                  {link.title}
                </NavLink>
              ))}
            </ul>
            <div className="flex gap-2">
              {user?.roleId === 2 && (
                  <Button route='/backoffice' buttonName='Backoffice' styles='primaryButton' />
              )}
              {user?.roleId === 1 && (
                  <Button route='/me' buttonName='Perfil' styles='primaryButton' />
              )}
              {user?.roleId === 2 && (
                  <Button route='/me' buttonName='Perfil' styles='primaryButton' />
              )}
              {user ? (
                <>
                  <Button route='/' buttonName='Cerrar sesion' styles='secondaryButton' handler={() => handleToggleUser(setUser, user)}/>
                </>
              ) : (
                <>
                  <Button route='/login-user' buttonName='Inicia sesion' styles='primaryButton' />
                  <Button route='/register-user' buttonName='Registrate' styles='secondaryButton' />
                </>
              )
              }
            </div>
          </div>
        </div>
      </div >
    ) 
  }

export default Header;