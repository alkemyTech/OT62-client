import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from '../../images/Logo.png'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'

const Footer = () => {
  const { pathname } = useLocation();
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
      title: 'Testimonios',
      route: '/testimonials'
    },
    {
      id: '5',
      title: 'Contacto',
      route: '/contacts'
    }
  ]
  if (pathname === "/login-user" || pathname === "/register-user") return null
  return (
    <div className='bg-neutral-400 pt-12 pr-4 pb-16 pl-4'>
      <div className="flex flex-col items-center gap-8">
        <div className="image-container">
          <Link to='/'>
            <img className="w-24 h-13" src={Logo} alt='Logo' />
          </Link>
        </div>
        <ul className="flex flex-col gap-4 md:flex md:flex-row md:gap-12 text-center">
          {links.map((link) => (
            <Link to={link.route} key={link.id}>
              {link.title}
            </Link>
          ))}
        </ul>
        <div className='flex flex-col gap-2.5 mt-7 py-0 px-2.5'>
          <div className="flex justify-center gap-6 align-center">
            <img className="w-8 h-8 object-contain" src={Facebook} alt='Facebook' />
            <img className="w-8 h-8 object-contain" src={Instagram} alt='Instagram' />
            <img className="w-8 h-8 object-contain" src={LinkedIn} alt='LinkedIn' />
          </div>
          <p className='text-center'>2022 by Alkemy. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
