import React from 'react'
import './Loading.css'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
  className?: string
}

export const Loading: React.FC<LoadingProps> = ({ size = 'medium', message = 'Loading...', className = '' }) => {
  return (
    <div className={`loading ${className}`} role='status' aria-live='polite'>
      <div className={`loading__spinner loading__spinner--${size}`} aria-hidden='true'>
        <div className='loading__spinner-circle'></div>
      </div>
      <span className='loading__message'>{message}</span>
    </div>
  )
}
