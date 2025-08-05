import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorMessage } from '../ErrorMessage'

describe('ErrorMessage', () => {
  it('should render error message', () => {
    render(<ErrorMessage message='Network connection failed' />)
    expect(screen.getByText('Network connection failed')).toBeInTheDocument()
  })

  it('should render default title', () => {
    render(<ErrorMessage message='Test error' />)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<ErrorMessage message='Test error' />)
    const errorElement = screen.getByRole('alert')
    expect(errorElement).toBeInTheDocument()
    expect(errorElement).toHaveAttribute('aria-live', 'assertive')
  })

  it('should render retry button when onRetry is provided', () => {
    const mockRetry = vi.fn()
    render(<ErrorMessage message='Test error' onRetry={mockRetry} />)
    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('should not render retry button when onRetry is not provided', () => {
    render(<ErrorMessage message='Test error' />)
    expect(screen.queryByText('Try again')).not.toBeInTheDocument()
  })

  it('should call onRetry when retry button is clicked', () => {
    const mockRetry = vi.fn()
    render(<ErrorMessage message='Test error' onRetry={mockRetry} />)

    const retryButton = screen.getByText('Try again')
    fireEvent.click(retryButton)

    expect(mockRetry).toHaveBeenCalledTimes(1)
  })

  it('should render with default variant', () => {
    render(<ErrorMessage message='Test error' />)
    expect(screen.getByRole('alert')).toHaveClass('error-message--default')
  })

  it('should render with card variant when specified', () => {
    render(<ErrorMessage message='Test error' variant='card' />)
    expect(screen.getByRole('alert')).toHaveClass('error-message--card')
  })

  it('should render with inline variant when specified', () => {
    render(<ErrorMessage message='Test error' variant='inline' />)
    expect(screen.getByRole('alert')).toHaveClass('error-message--inline')
  })

  it('should apply custom className', () => {
    render(<ErrorMessage message='Test error' className='custom-class' />)
    expect(screen.getByRole('alert')).toHaveClass('custom-class')
  })

  it('should have icon with aria-hidden attribute', () => {
    render(<ErrorMessage message='Test error' />)
    const icon = screen.getByRole('alert').querySelector('.error-message__icon')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render retry button with correct type', () => {
    const mockRetry = vi.fn()
    render(<ErrorMessage message='Test error' onRetry={mockRetry} />)

    const retryButton = screen.getByText('Try again')
    expect(retryButton).toHaveAttribute('type', 'button')
  })
})
