import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loading } from '../Loading'

describe('Loading', () => {
  it('should render default loading message', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render custom loading message', () => {
    render(<Loading message='Loading movies...' />)
    expect(screen.getByText('Loading movies...')).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<Loading />)
    const loadingElement = screen.getByRole('status')
    expect(loadingElement).toBeInTheDocument()
    expect(loadingElement).toHaveAttribute('aria-live', 'polite')
  })

  it('should render with medium size by default', () => {
    render(<Loading />)
    const spinner = screen.getByRole('status').querySelector('.loading__spinner')
    expect(spinner).toHaveClass('loading__spinner--medium')
  })

  it('should render with small size when specified', () => {
    render(<Loading size='small' />)
    const spinner = screen.getByRole('status').querySelector('.loading__spinner')
    expect(spinner).toHaveClass('loading__spinner--small')
  })

  it('should render with large size when specified', () => {
    render(<Loading size='large' />)
    const spinner = screen.getByRole('status').querySelector('.loading__spinner')
    expect(spinner).toHaveClass('loading__spinner--large')
  })

  it('should apply custom className', () => {
    render(<Loading className='custom-class' />)
    expect(screen.getByRole('status')).toHaveClass('custom-class')
  })

  it('should have spinner with aria-hidden attribute', () => {
    render(<Loading />)
    const spinner = screen.getByRole('status').querySelector('.loading__spinner')
    expect(spinner).toHaveAttribute('aria-hidden', 'true')
  })
})
