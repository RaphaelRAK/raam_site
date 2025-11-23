'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconPlus, IconCamera, IconRefresh, IconSearch, IconEdit, IconSave } from '@/components/Icons'

const transactionViews = [
  {
    title: 'Vue Liste',
    description: 'Affichage chronologique avec tri et recherche avancée',
    lightImage: '/ecrans/transaction-list-light.jpeg',
    darkImage: '/ecrans/transaction-list-dark.jpeg',
    features: ['Tri par date, montant, catégorie', 'Recherche textuelle', 'Filtres multiples', 'Affichage compact']
  },
  {
    title: 'Vue Calendrier',
    description: 'Vue mensuelle avec indicateurs visuels des transactions par jour',
    lightImage: '/ecrans/transaction-calendrier-light.jpeg',
    darkImage: '/ecrans/transaction-calendrier-dark.jpeg',
    features: ['Navigation mensuelle', 'Indicateurs par jour', 'Sélection rapide', 'Totaux journaliers']
  },
  {
    title: 'Vue Semaine',
    description: 'Vue hebdomadaire avec totaux détaillés par jour',
    lightImage: '/ecrans/transaction-semaine-light.jpeg',
    darkImage: '/ecrans/transaction-semaine-dark.jpeg',
    features: ['Vue 7 jours', 'Totaux par jour', 'Navigation fluide', 'Comparaison facile']
  },
  {
    title: 'Vue Mois',
    description: 'Récapitulatif mensuel complet avec toutes vos transactions',
    lightImage: '/ecrans/transaction-mois_light.jpeg',
    darkImage: '/ecrans/transaction-mois-dark.jpeg',
    features: ['Récapitulatif complet', 'Totaux mensuels', 'Tendances visibles', 'Export disponible']
  },
  {
    title: 'Vue Totaux',
    description: 'Vue agrégée avec totaux par période et catégories',
    lightImage: '/ecrans/transaction-total-2-light.jpeg',
    darkImage: '/ecrans/transaction-total-dark.jpeg',
    features: ['Totaux par période', 'Répartition catégories', 'Comparaisons', 'Synthèse rapide']
  }
]

const transactionFeatures = [
  {
    icon: IconPlus,
    title: 'Ajout Rapide',
    description: 'Formulaire intuitif avec onglets pour Dépenses, Revenus et Transferts. Ajout en quelques secondes.'
  },
  {
    icon: IconCamera,
    title: 'Photos de Justificatifs',
    description: 'Ajoutez des photos de factures ou reçus. Stockage local sécurisé, vos images restent privées.'
  },
  {
    icon: IconRefresh,
    title: 'Transactions Récurrentes',
    description: 'Créez des règles automatiques : quotidiennes, hebdomadaires, mensuelles ou annuelles.'
  },
  {
    icon: IconSearch,
    title: 'Filtres Avancés',
    description: 'Filtrez par date, catégorie, compte, type, montant. Recherche textuelle dans descriptions.'
  },
  {
    icon: IconEdit,
    title: 'Édition & Suppression',
    description: 'Modifiez ou supprimez vos transactions facilement. Confirmation pour éviter les erreurs.'
  },
  {
    icon: IconSave,
    title: 'Sauvegarde et Continuer',
    description: 'Ajoutez plusieurs transactions rapidement sans revenir au menu principal.'
  }
]

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Gérez Vos Transactions
              <span className="block text-purple-600 mt-2">Avec Simplicité</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Suivez toutes vos dépenses et revenus avec des vues multiples, des filtres puissants et une interface intuitive.
              Vos données restent 100% locales et privées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Télécharger Gratuitement
              </a>
              <Link href="/statistiques" className="btn-secondary text-lg px-8 py-4">
                Découvrir les Statistiques →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vues Multiples */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900">
              Cinq Vues Différentes
            </h2>
            <p className="section-subtitle">
              Choisissez la vue qui correspond le mieux à votre façon de gérer vos finances
            </p>
          </motion.div>

          <div className="space-y-24">
            {transactionViews.map((view, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{view.title}</h3>
                  <p className="text-lg text-gray-600">{view.description}</p>
                  <ul className="space-y-3">
                    {view.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative flex justify-center">
                  <div className="relative w-[280px] h-[580px]">
                    <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                        <Image
                          src={view.lightImage}
                          alt={view.title}
                          fill
                          className="object-contain"
                          quality={90}
                          sizes="280px"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900">
              Fonctionnalités Avancées
            </h2>
            <p className="section-subtitle">
              Tout ce dont vous avez besoin pour gérer vos transactions efficacement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transactionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Prendre le Contrôle de Vos Finances ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Téléchargez Flut Budget gratuitement et commencez à suivre vos transactions dès aujourd'hui.
              Aucune inscription requise, 100% local et sécurisé.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
            >
              Télécharger Maintenant
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

