import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export const Navigation: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <nav className='navigation' role='navigation' aria-label='Main navigation'>
      <div className='navigation__container'>
        <Link to='/' className='navigation__brand' aria-label='CinemaScope - Home'>
          <span className='navigation__icon'>🎬</span>
          <span className='navigation__title'>CinemaScope</span>
        </Link>

        <ul className='navigation__menu'>
          <li className='navigation__item'>
            <Link
              to='/'
              className={`navigation__link ${isHomePage ? 'navigation__link--active' : ''}`}
              aria-current={isHomePage ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
