import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flut Budget - La Solution Ultime pour Maîtriser Vos Finances',
  description: 'Application de gestion budgétaire 100% locale et sécurisée. Vos données ne quittent jamais votre téléphone. Application gratuite.',
  keywords: 'budget, finances, gestion budgétaire, application mobile, sécurité, confidentialité',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

