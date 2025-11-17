import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions d'Utilisation</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptation des Conditions</h2>
                <p>
                  En téléchargeant et en utilisant Flut Budget, vous acceptez d'être lié par ces conditions d'utilisation.
                  Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Utilisation de l'Application</h2>
                <p>
                  Flut Budget est fourni à des fins de gestion budgétaire personnelle. Vous êtes responsable de
                  l'utilisation de l'application et de toutes les données que vous y entrez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Confidentialité des Données</h2>
                <p>
                  Toutes vos données sont stockées localement sur votre appareil. Nous ne collectons, ne stockons
                  ni ne transmettons aucune de vos données financières à des serveurs externes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Limitation de Responsabilité</h2>
                <p>
                  Flut Budget est fourni "tel quel" sans garantie d'aucune sorte. Nous ne sommes pas responsables
                  des pertes financières résultant de l'utilisation de l'application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront
                  effectives dès leur publication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions, veuillez nous contacter à :
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

