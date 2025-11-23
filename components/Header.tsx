'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Flut Budget
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/transactions" className="text-gray-700 hover:text-purple-600 transition-colors">
              Transactions
            </Link>
            <Link href="/statistiques" className="text-gray-700 hover:text-purple-600 transition-colors">
              Statistiques
            </Link>
            <Link href="/comptes" className="text-gray-700 hover:text-purple-600 transition-colors">
              Comptes
            </Link>
            <Link href="/securite" className="text-gray-700 hover:text-purple-600 transition-colors">
              Sécurité
            </Link>
            <Link href="/personnalisation" className="text-gray-700 hover:text-purple-600 transition-colors">
              Personnalisation
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-purple-600 transition-colors">
              Aide
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Télécharger
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/transactions"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Transactions
            </Link>
            <Link
              href="/statistiques"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistiques
            </Link>
            <Link
              href="/comptes"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comptes
            </Link>
            <Link
              href="/securite"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sécurité
            </Link>
            <Link
              href="/personnalisation"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Personnalisation
            </Link>
            <Link
              href="/help"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Aide
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Télécharger
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

