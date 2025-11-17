'use client'

import { motion } from 'framer-motion'

const advantages = [
  {
    title: '100% Local et Privé',
    description: 'Vos données ne quittent jamais votre téléphone. Aucune synchronisation cloud, aucun serveur externe.',
  },
  {
    title: 'Gratuit et Sans Publicité',
    description: 'Application entièrement gratuite sans publicités intrusives.',
  },
  {
    title: 'Fonctionne Hors Ligne',
    description: 'Aucune connexion Internet requise. Utilisez l\'application partout, tout le temps.',
  },
  {
    title: 'Sécurité Maximale',
    description: 'Verrouillage biométrique, cryptage des données, stockage sécurisé.',
  },
  {
    title: 'Multi-Comptes Avancé',
    description: 'Gérez un nombre illimité de comptes avec des fonctionnalités professionnelles.',
  },
  {
    title: 'Visualisations Puissantes',
    description: 'Graphiques interactifs, calendrier, vues multiples pour comprendre vos finances.',
  },
  {
    title: 'Automatisation Intelligente',
    description: 'Transactions récurrentes, rappels personnalisés, budgets automatiques.',
  },
  {
    title: 'Personnalisation Totale',
    description: 'Thèmes, couleurs, langues, devises - adaptez tout à vos préférences.',
  },
  {
    title: 'Interface Moderne',
    description: 'Design élégant et intuitif suivant les dernières tendances Material Design.',
  },
  {
    title: 'Export et Sauvegarde',
    description: 'Exportez vos données, créez des sauvegardes, gardez le contrôle total.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Pourquoi Choisir Flut Budget ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Des avantages uniques qui font de Flut Budget le meilleur choix pour gérer vos finances
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

