import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const helpSections = [
  {
    title: 'Premiers Pas',
    items: [
      {
        question: 'Comment créer ma première transaction ?',
        answer: 'Cliquez sur le bouton "+" en bas à droite de l\'écran Transactions, puis remplissez les informations (type, montant, catégorie, compte) et enregistrez.',
      },
      {
        question: 'Comment ajouter un compte ?',
        answer: 'Allez dans l\'onglet "Comptes", cliquez sur "+", choisissez le type de compte et remplissez les informations nécessaires.',
      },
      {
        question: 'Comment changer la devise ?',
        answer: 'Allez dans Paramètres > Général > Devise principale, puis sélectionnez votre devise préférée.',
      },
    ],
  },
  {
    title: 'Transactions',
    items: [
      {
        question: 'Comment utiliser la calculatrice intégrée ?',
        answer: 'Dans le champ montant, vous pouvez saisir directement des expressions mathématiques comme "50+30" ou "100*1.2". Le résultat sera calculé automatiquement.',
      },
      {
        question: 'Comment créer une transaction récurrente ?',
        answer: 'Allez dans Paramètres > Transactions > Répétition des transactions, puis créez une nouvelle règle de récurrence avec la fréquence souhaitée.',
      },
      {
        question: 'Comment ajouter une photo à une transaction ?',
        answer: 'Lors de la création ou modification d\'une transaction, utilisez l\'icône caméra pour photographier un reçu ou sélectionner une image depuis votre galerie.',
      },
    ],
  },
  {
    title: 'Statistiques',
    items: [
      {
        question: 'Comment changer le type de graphique ?',
        answer: 'Dans l\'écran Statistiques, utilisez les boutons en bas (Camembert, Barres, Ligne) pour changer le type de visualisation.',
      },
      {
        question: 'Comment filtrer les statistiques par période ?',
        answer: 'Utilisez les filtres en haut de l\'écran Statistiques pour sélectionner une période personnalisée ou choisir entre dépenses, revenus ou les deux.',
      },
      {
        question: 'Comment exporter mes données ?',
        answer: 'Allez dans Paramètres > Sauvegarde > Exporter les données, puis choisissez le format (CSV, Excel, TXT) et la période à exporter.',
      },
    ],
  },
  {
    title: 'Sécurité',
    items: [
      {
        question: 'Comment activer le verrouillage par code ?',
        answer: 'Allez dans Paramètres > Sécurité > Verrouillage par code, puis configurez un code PIN, mot de passe ou activez la biométrie.',
      },
      {
        question: 'Mes données sont-elles synchronisées ?',
        answer: 'Non, toutes vos données restent 100% locales sur votre appareil. Aucune synchronisation cloud n\'est effectuée pour garantir votre confidentialité.',
      },
      {
        question: 'Comment créer une sauvegarde ?',
        answer: 'Allez dans Paramètres > Sauvegarde > Sauvegarde pour créer une sauvegarde complète de vos données. Vous pourrez la restaurer plus tard si nécessaire.',
      },
    ],
  },
  {
    title: 'Personnalisation',
    items: [
      {
        question: 'Comment changer le thème (clair/sombre) ?',
        answer: 'Allez dans Paramètres > Apparence > Thème, puis basculez entre le mode clair et sombre selon vos préférences.',
      },
      {
        question: 'Comment changer la langue ?',
        answer: 'Allez dans Paramètres > Général > Langue, puis sélectionnez votre langue préférée parmi les 5 langues disponibles.',
      },
      {
        question: 'Comment personnaliser les couleurs ?',
        answer: 'Allez dans Paramètres > Apparence > Couleurs personnalisées pour modifier les couleurs des revenus et dépenses.',
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Centre d'Aide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Besoin d'aide pour utiliser Flut Budget ? Trouvez des réponses à vos questions ici.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {helpSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Besoin d'aide supplémentaire ?</h2>
              <p className="text-purple-100 mb-6">
                Vous pouvez trouver des mises à jour régulières et des manuels utilisateur complets.
              </p>
              <a
                href="mailto:support@flutbudget.com"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

