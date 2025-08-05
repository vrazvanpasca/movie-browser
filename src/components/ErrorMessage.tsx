import React from 'react'
import './ErrorMessage.css'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
  className?: string
  variant?: 'default' | 'card' | 'inline'
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className = '',
  variant = 'default',
}) => {
  return (
    <div className={`error-message error-message--${variant} ${className}`} role='alert' aria-live='assertive'>
      <div className='error-message__icon' aria-hidden='true'>
        ⚠️
      </div>

      <div className='error-message__content'>
        <h3 className='error-message__title'>Something went wrong</h3>
        <p className='error-message__text'>{message}</p>

        {onRetry && (
          <button className='error-message__retry-button' onClick={onRetry} type='button'>
            Try again
          </button>
        )}
      </div>
    </div>
  )
}
