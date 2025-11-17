import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Engagement envers la Confidentialité</h2>
                <p>
                  Flut Budget s'engage à protéger votre vie privée. Cette politique explique comment nous traitons
                  vos données (spoiler : nous ne les collectons pas).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Stockage Local</h2>
                <p>
                  Toutes vos données financières (transactions, comptes, budgets) sont stockées exclusivement sur
                  votre appareil. Aucune donnée n'est synchronisée avec des serveurs externes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Aucune Collecte de Données</h2>
                <p>
                  Nous ne collectons pas :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Vos transactions financières</li>
                  <li>Vos informations de compte</li>
                  <li>Vos données personnelles</li>
                  <li>Votre localisation</li>
                  <li>Aucune information d'identification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Permissions de l'Application</h2>
                <p>
                  L'application peut demander certaines permissions pour fonctionner :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Caméra</strong> : Pour photographier vos reçus (optionnel)</li>
                  <li><strong>Stockage</strong> : Pour sauvegarder vos photos de reçus localement</li>
                  <li><strong>Notifications</strong> : Pour vos rappels personnalisés (optionnel)</li>
                </ul>
                <p className="mt-4">
                  Toutes ces permissions sont optionnelles et vous pouvez refuser sans affecter les fonctionnalités
                  principales de l'application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Sécurité</h2>
                <p>
                  Vos données sont protégées par :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Cryptage avec Flutter Secure Storage</li>
                  <li>Verrouillage par code PIN, mot de passe ou biométrie</li>
                  <li>Stockage local sécurisé</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Vos Droits</h2>
                <p>
                  Vous avez un contrôle total sur vos données :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Exportez vos données à tout moment (format CSV, Excel, TXT)</li>
                  <li>Supprimez toutes vos données en désinstallant l'application</li>
                  <li>Créez des sauvegardes locales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Modifications de cette Politique</h2>
                <p>
                  Nous pouvons mettre à jour cette politique de confidentialité. Toute modification sera publiée
                  sur cette page avec une date de mise à jour.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité, contactez-nous à :
                  <a href="mailto:support@flutbudget.com" className="text-purple-600 hover:underline ml-1">
                    support@flutbudget.com
                  </a>
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

