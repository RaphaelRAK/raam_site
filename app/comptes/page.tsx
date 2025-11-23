'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconBank, IconCash, IconWallet, IconCreditCard, IconDocument, IconPiggyBank, IconTrendingUp, IconMobile, IconSettings, IconCurrency, IconLock, IconNote, IconArchive, IconPalette, IconChart } from '@/components/Icons'

const accountTypes = [
  {
    name: 'Banque',
    icon: IconBank,
    description: 'Comptes bancaires classiques'
  },
  {
    name: 'Espèces',
    icon: IconCash,
    description: 'Argent liquide en votre possession'
  },
  {
    name: 'Portefeuille',
    icon: IconWallet,
    description: 'Portefeuille physique ou numérique'
  },
  {
    name: 'Carte de Crédit',
    icon: IconCreditCard,
    description: 'Cartes de crédit avec limite'
  },
  {
    name: 'Prêt',
    icon: IconDocument,
    description: 'Prêts et crédits à rembourser'
  },
  {
    name: 'Épargne',
    icon: IconPiggyBank,
    description: 'Comptes d\'épargne et placements'
  },
  {
    name: 'Investissement',
    icon: IconTrendingUp,
    description: 'Comptes d\'investissement'
  },
  {
    name: 'Mobile Money',
    icon: IconMobile,
    description: 'Portefeuilles mobiles'
  },
  {
    name: 'Personnalisé',
    icon: IconSettings,
    description: 'Type de compte personnalisé'
  }
]

const accountFeatures = [
  {
    icon: IconCurrency,
    title: 'Multi-Devises',
    description: 'Gérez plusieurs devises simultanément. Devise principale + sous-devises pour chaque compte.'
  },
  {
    icon: IconPalette,
    title: 'Icônes Personnalisées',
    description: 'Choisissez une icône pour chaque compte pour une identification visuelle rapide.'
  },
  {
    icon: IconChart,
    title: 'Solde en Temps Réel',
    description: 'Calcul automatique du solde basé sur toutes vos transactions. Mise à jour instantanée.'
  },
  {
    icon: IconLock,
    title: 'Exclure du Total',
    description: 'Option pour masquer certains comptes du total général si nécessaire.'
  },
  {
    icon: IconNote,
    title: 'Notes Personnalisées',
    description: 'Ajoutez des notes et descriptions pour chaque compte pour plus de contexte.'
  },
  {
    icon: IconArchive,
    title: 'Archivage',
    description: 'Archivez les comptes inactifs sans les supprimer. Réactivez-les quand vous voulez.'
  }
]

const accountCategories = [
  {
    name: 'Actifs',
    description: 'Tous vos comptes qui représentent ce que vous possédez',
    color: 'text-green-600'
  },
  {
    name: 'Passifs',
    description: 'Comptes représentant ce que vous devez (prêts, crédits)',
    color: 'text-red-600'
  },
  {
    name: 'Personnalisés',
    description: 'Créez vos propres catégories selon vos besoins',
    color: 'text-purple-600'
  }
]

export default function ComptesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Gérez Plusieurs Comptes
              <span className="block text-green-600 mt-2">En Un Seul Endroit</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Organisez tous vos comptes financiers : banque, espèces, cartes de crédit, prêts, épargne.
              Suivez vos totaux d'actifs, passifs et patrimoine net en temps réel.
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
                Voir les Statistiques →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types de Comptes */}
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
              Neuf Types de Comptes Disponibles
            </h2>
            <p className="section-subtitle">
              Créez et gérez tous vos comptes financiers selon vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {accountTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-3">
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-[280px] h-[580px] mx-auto">
                <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                    <Image
                      src="/ecrans/compte-ligth.jpeg"
                      alt="Gestion des comptes"
                      fill
                      className="object-contain"
                      quality={90}
                      sizes="280px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-[280px] h-[580px] mx-auto">
                <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                    <Image
                      src="/ecrans/compte-dark.jpeg"
                      alt="Détails du compte"
                      fill
                      className="object-contain"
                      quality={90}
                      sizes="280px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catégories */}
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
              Organisation par Catégories
            </h2>
            <p className="section-subtitle">
              Classez vos comptes pour une vue d'ensemble claire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accountCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className={`text-2xl font-bold ${category.color} mb-4`}>{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
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
              Des outils puissants pour gérer efficacement tous vos comptes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Totaux Financiers */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vue d'Ensemble Financière
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Suivez automatiquement vos totaux financiers en temps réel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3">Total des Actifs</h3>
              <p className="text-green-100">Somme de tous vos comptes d'actifs (banque, épargne, investissements)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3">Total des Passifs</h3>
              <p className="text-green-100">Somme de tous vos comptes de passifs (prêts, crédits, dettes)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3">Patrimoine Net</h3>
              <p className="text-green-100">Calcul automatique : Actifs - Passifs = Votre patrimoine réel</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Organisez Tous Vos Comptes Dès Aujourd'hui
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Téléchargez Flut Budget gratuitement et commencez à gérer tous vos comptes en un seul endroit.
              Sécurisé, local et sans inscription.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
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

