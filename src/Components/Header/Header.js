import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.png'
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  const links = [
    {
      id: '1',
      title: 'Inicio',
      route: '/'
    },
    {
      id: '2',
      title: 'Nosotros',
      route: '/nosotros'
    },
    {
      id: '3',
      title: 'Novedades',
      route: '/news'
    },
    {
      id: '4',
      title: 'Actividades',
      route: '/activities'
    },
    {
      id: '5',
      title: 'Testimonios',
      route: '/testimonials'
    },
    {
      id: '6',
      title: 'Contacto',
      route: '/contacts'
    }
  ]
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
            <button className="py-1 px-2 sm:py-1.5 sm:px-4 self-center border-black border rounded-3xl">
              <p className="text-sm"><Link to="/login-user">Log in</Link></p>
            </button>
            <button className="self-center py-1.5 px-2 sm:py-1.5 sm:px-4 border bg-red-600 rounded-3xl">
              <p className="text-white text-sm"><Link to="/register-user">Register</Link></p>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;