'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconCalendar, IconFilter, IconChart, IconPalette, IconTrending, IconDownload } from '@/components/Icons'

const graphTypes = [
  {
    title: 'Graphique en Camembert',
    description: 'Visualisez la répartition de vos dépenses par catégorie en un coup d\'œil',
    image: '/ecrans/stat-2-cambert-dark.jpeg',
    features: ['Répartition par catégorie', 'Pourcentages visuels', 'Couleurs personnalisables', 'Interactif']
  },
  {
    title: 'Graphique en Barres',
    description: 'Comparez vos dépenses et revenus par période avec des barres claires',
    image: '/ecrans/stat2-barres-dark.jpeg',
    features: ['Comparaison périodes', 'Dépenses vs Revenus', 'Zoom et détails', 'Export possible']
  },
  {
    title: 'Graphique en Ligne',
    description: 'Suivez l\'évolution de vos finances dans le temps avec des courbes',
    image: '/ecrans/stat-2-line-light.jpeg',
    features: ['Évolution temporelle', 'Tendances visibles', 'Points d\'intérêt', 'Projections']
  },
  {
    title: 'Liste des Catégories',
    description: 'Vue détaillée avec barres de progression et pourcentages pour chaque catégorie',
    image: '/ecrans/stat-depenses-2-light.jpeg',
    features: ['Barres de progression', 'Pourcentages précis', 'Montants détaillés', 'Tri personnalisable']
  }
]

const statFeatures = [
  {
    icon: IconCalendar,
    title: 'Périodes Flexibles',
    description: 'Quotidien, Hebdomadaire, Mensuel, Annuel ou période personnalisée selon vos besoins'
  },
  {
    icon: IconFilter,
    title: 'Filtres Avancés',
    description: 'Filtrez par compte, type de transaction, catégorie. Sélection multiple disponible.'
  },
  {
    icon: IconChart,
    title: 'Totaux en Temps Réel',
    description: 'Dépenses totales, revenus totaux et solde net mis à jour automatiquement'
  },
  {
    icon: IconPalette,
    title: 'Personnalisation',
    description: 'Choisissez les données à afficher : dépenses uniquement, revenus uniquement, ou les deux'
  },
  {
    icon: IconTrending,
    title: 'Comparaisons',
    description: 'Comparez différentes périodes pour identifier vos tendances et améliorer votre budget'
  },
  {
    icon: IconDownload,
    title: 'Export de Données',
    description: 'Exportez vos statistiques en Excel, CSV ou texte pour analyse approfondie'
  }
]

const totalCards = [
  {
    title: 'Dépenses Totales',
    description: 'Vue d\'ensemble de toutes vos dépenses sur la période sélectionnée',
    image: '/ecrans/stat-depenses-light.jpeg'
  },
  {
    title: 'Récapitulatif Complet',
    description: 'Carte récapitulative avec tous vos totaux financiers en un seul endroit',
    image: '/ecrans/stat-totlight.jpeg'
  }
]

export default function StatistiquesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Analysez Vos Finances
              <span className="block text-blue-600 mt-2">Avec Des Graphiques Puissants</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Visualisez vos dépenses et revenus avec des graphiques interactifs. Comprenez vos habitudes financières
              et prenez des décisions éclairées pour améliorer votre budget.
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
              <Link href="/transactions" className="btn-secondary text-lg px-8 py-4">
                Découvrir les Transactions →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types de Graphiques */}
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
              Quatre Types de Visualisations
            </h2>
            <p className="section-subtitle">
              Choisissez le format qui vous aide le mieux à comprendre vos finances
            </p>
          </motion.div>

          <div className="space-y-24">
            {graphTypes.map((graph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{graph.title}</h3>
                  <p className="text-lg text-gray-600">{graph.description}</p>
                  <ul className="space-y-3">
                    {graph.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">✓</span>
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
                          src={graph.image}
                          alt={graph.title}
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

      {/* Totaux */}
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
              Cartes Récapitulatives
            </h2>
            <p className="section-subtitle">
              Vue d'ensemble instantanée de votre situation financière
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {totalCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <div className="relative w-[240px] h-[426px] mx-auto rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    quality={90}
                    sizes="240px"
                    unoptimized
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
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
              Fonctionnalités Avancées
            </h2>
            <p className="section-subtitle">
              Des outils puissants pour analyser vos finances en profondeur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visualisez Vos Finances Dès Aujourd'hui
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Téléchargez Flut Budget et découvrez des graphiques interactifs pour mieux comprendre vos habitudes financières.
              Gratuit, sécurisé et 100% local.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
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

