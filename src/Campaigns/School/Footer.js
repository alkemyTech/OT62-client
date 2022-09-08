import React from 'react';
import Logo from '../../images/Logo.png'

const Footer = () => {
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
    },
    {
      id: '6',
      title: 'Contribuye',
      route: '/contribuye'
    }
  ]
  return (
    <div className='bg-neutral-400 pt-12 pr-4 pb-16 pl-4'>
      <div className="flex flex-col items-center gap-8">
        <div className="image-container">
          <img className="w-24 h-13" src={Logo} alt='Logo' />
        </div>
        <ul className="flex flex-col gap-4 md:flex md:flex-row md:gap-12 text-center">
          {links.map((link) => (
            <li key={link.id}>
              {link.title}
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-2.5 mt-7 py-0 px-2.5'>
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 bg-gray-800 rounded-3xl"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-3xl"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-3xl"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-3xl"></div>
          </div>
          <p className='text-center'>2022 by Alkemy. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
