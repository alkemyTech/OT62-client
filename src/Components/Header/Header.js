import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.png'
import { Link } from "react-router-dom";
import { useUserContext, useUserToggleContext } from '../../context/UserProvider';
import { linksPublic, linksLoguedUser } from '../../data/headerData';

const Header = () => {
  const [ links, setLinks ] = useState([]);
  const navigate = useNavigate();
  const user = useUserContext()
  const setUser = useUserToggleContext()

  useEffect(() => {
    user ? setLinks(linksLoguedUser) : setLinks(linksPublic)
  }, [user])

  if (JSON.stringify(links) === '[]') {
    return <p>error</p>
  } else {
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
                    <button className="px-6 py-2 w-fit text-black border rounded-lg self-center border-black hover:bg-slate-300">
                      <p className="text-sm"><Link to="/backoffice">Backoffice</Link></p>
                    </button>
              )}
              {user?.roleId === 1 && (
                    <button className="px-6 py-2 w-fit text-black border rounded-lg self-center border-black hover:bg-slate-300">
                      <p className="text-sm"><Link to="/me">Perfil</Link></p>
                    </button>
              )}
              {user ? (
                <>
                  <button className="px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center">
                    <p className="text-white text-sm"><Link to="/" onClick={() => setUser(null)}>Cerrar sesion</Link></p>
                  </button>
                </>
              ) : (
                <>
                  <button className="px-6 py-2 w-fit text-black border rounded-lg self-center border-black hover:bg-slate-300">
                    <p className="text-sm"><Link to="/login-user">Iniciar sesion</Link></p>
                  </button>
                  <button className="px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center">
                    <p className="text-white text-sm"><Link to="/register-user">Registro</Link></p>
                  </button>
                </>
              )
              }
            </div>
          </div>
        </div>
      </div >
      ) 
  }
}

export default Header;