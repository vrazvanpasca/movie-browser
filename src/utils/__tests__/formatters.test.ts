import { describe, it, expect } from 'vitest'
import { formatDate, formatYear, formatRuntime, formatCurrency, formatRating, truncateText } from '../formatters'

describe('formatters', () => {
  describe('formatDate', () => {
    it('should format valid date string correctly', () => {
      expect(formatDate('2023-03-15')).toBe('March 15, 2023')
    })

    it('should handle invalid date string', () => {
      expect(formatDate('invalid-date')).toBe('Unknown date')
    })

    it('should handle empty string', () => {
      expect(formatDate('')).toBe('Unknown date')
    })
  })

  describe('formatYear', () => {
    it('should extract year from valid date string', () => {
      expect(formatYear('2023-03-15')).toBe('2023')
    })

    it('should handle invalid date string', () => {
      expect(formatYear('invalid-date')).toBe('Unknown')
    })

    it('should handle empty string', () => {
      expect(formatYear('')).toBe('Unknown')
    })
  })

  describe('formatRuntime', () => {
    it('should format runtime in hours and minutes', () => {
      expect(formatRuntime(142)).toBe('2h 22m')
    })

    it('should format runtime with only hours', () => {
      expect(formatRuntime(120)).toBe('2h')
    })

    it('should format runtime with only minutes', () => {
      expect(formatRuntime(45)).toBe('45m')
    })

    it('should handle null runtime', () => {
      expect(formatRuntime(null)).toBe('Unknown')
    })

    it('should handle zero runtime', () => {
      expect(formatRuntime(0)).toBe('0m')
    })
  })

  describe('formatCurrency', () => {
    it('should format large amounts correctly', () => {
      expect(formatCurrency(1000000)).toBe('$1,000,000')
    })

    it('should format small amounts correctly', () => {
      expect(formatCurrency(1500)).toBe('$1,500')
    })

    it('should handle zero amount', () => {
      expect(formatCurrency(0)).toBe('Unknown')
    })

    it('should handle negative amounts', () => {
      expect(formatCurrency(-1000)).toBe('-$1,000')
    })
  })

  describe('formatRating', () => {
    it('should format rating with one decimal place', () => {
      expect(formatRating(8.7)).toBe('8.7/10')
    })

    it('should format whole number rating', () => {
      expect(formatRating(9)).toBe('9.0/10')
    })

    it('should format rating with multiple decimal places', () => {
      expect(formatRating(7.654321)).toBe('7.7/10')
    })

    it('should handle zero rating', () => {
      expect(formatRating(0)).toBe('0.0/10')
    })
  })

  describe('truncateText', () => {
    it('should truncate text longer than max length', () => {
      const longText = 'This is a very long text that should be truncated'
      expect(truncateText(longText, 20)).toBe('This is a very long...')
    })

    it('should not truncate text shorter than max length', () => {
      const shortText = 'Short text'
      expect(truncateText(shortText, 20)).toBe('Short text')
    })

    it('should not truncate text equal to max length', () => {
      const exactText = 'Exactly twenty chars'
      expect(truncateText(exactText, 20)).toBe('Exactly twenty chars')
    })

    it('should handle empty string', () => {
      expect(truncateText('', 10)).toBe('')
    })

    it('should handle zero max length', () => {
      expect(truncateText('Some text', 0)).toBe('...')
    })
  })
})
