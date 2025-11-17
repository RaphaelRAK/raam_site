'use client'

import { motion } from 'framer-motion'

const securityFeatures = [
  {
    icon: '🔐',
    title: 'Verrouillage Biométrique',
    description: 'Déverrouillez votre application en un instant avec votre empreinte digitale ou reconnaissance faciale',
  },
  {
    icon: '🔑',
    title: 'Code PIN Sécurisé',
    description: 'Configurez un code PIN à 4 chiffres pour un accès rapide et sécurisé',
  },
  {
    icon: '🛡️',
    title: 'Stockage Crypté',
    description: 'Toutes vos données sont cryptées et stockées localement avec Flutter Secure Storage',
  },
  {
    icon: '🚫',
    title: 'Aucune Connexion Internet',
    description: 'Fonctionne entièrement hors ligne, vos informations financières ne quittent jamais votre téléphone',
  },
]

export default function Security() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sécurité et Confidentialité
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Vos données, votre contrôle. Protection multi-niveaux pour une sécurité maximale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Confidentialité Absolue</h3>
            <ul className="text-left space-y-3 text-purple-100">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Zéro synchronisation cloud - Vos transactions ne sont jamais envoyées sur des serveurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Pas de compte utilisateur - Aucune inscription, aucun email, aucune donnée collectée</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Données locales uniquement - Base de données SQLite sécurisée directement sur votre appareil</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Transparence totale - Vous savez exactement où se trouvent vos données : sur votre téléphone</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

