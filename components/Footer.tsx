'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Flut Budget</h3>
            <p className="text-gray-400">
              Votre compagnon financier intelligent, 100% local et sécurisé.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">
                  Captures d'écran
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-white transition-colors">
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:support@flutbudget.com" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Flut Budget. Tous droits réservés.</p>
          <p className="mt-2">Développé avec ❤️ pour vous donner le contrôle total sur vos finances.</p>
        </div>
      </div>
    </footer>
  )
}

