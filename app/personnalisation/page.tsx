'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconPalette, IconGlobe, IconCurrency, IconCalendar, IconRefresh, IconBell, IconFilter, IconChart, IconDownload, IconCloud, IconComputer, IconLocation, IconSmile, IconZap, IconDiamond } from '@/components/Icons'

const personalizationCategories = [
  {
    title: 'Apparence',
    icon: IconPalette,
    features: [
      'Mode clair / Mode sombre',
      'Couleurs personnalisées pour revenus/dépenses',
      'Choix de l\'écran de démarrage',
      'Interface adaptative'
    ],
    image: '/ecrans/parametre-dark.jpeg'
  },
  {
    title: 'Langues',
    icon: IconGlobe,
    features: [
      'Français',
      'Anglais',
      'Espagnol',
      'Chinois',
      'Malagasy'
    ],
    image: '/ecrans/language-dark.jpeg'
  },
  {
    title: 'Devises',
    icon: IconCurrency,
    features: [
      '100+ devises disponibles',
      'Recherche de devise',
      'Sous-devises multiples',
      'Décimales personnalisables (0 à 4)'
    ],
    image: '/ecrans/compte-2-dark.jpeg'
  }
]

const advancedSettings = [
  {
    icon: IconCalendar,
    title: 'Date de Début du Mois',
    description: 'Personnalisez votre cycle budgétaire. Choisissez le jour où votre mois financier commence.'
  },
  {
    icon: IconRefresh,
    title: 'Transactions Récurrentes',
    description: 'Gérez toutes vos règles de transactions récurrentes depuis un seul endroit.'
  },
  {
    icon: IconBell,
    title: 'Rappels Personnalisables',
    description: 'Configurez des notifications avec titre, message et heure personnalisés.'
  },
  {
    icon: IconFilter,
    title: 'Filtres par Défaut',
    description: 'Définissez vos filtres de transactions préférés pour un accès rapide.'
  },
  {
    icon: IconChart,
    title: 'Sous-Catégories',
    description: 'Activez ou désactivez les sous-catégories selon vos besoins d\'organisation.'
  },
  {
    icon: IconDownload,
    title: 'Export de Données',
    description: 'Exportez vos données en Excel (.xls), CSV (.csv) ou Texte (.txt) pour sauvegarde ou analyse.'
  }
]

const upcomingFeatures = [
  {
    icon: IconCloud,
    title: 'Sauvegarde Google Drive',
    description: 'Bientôt disponible : sauvegarde automatique vers votre Google Drive pour une sécurité supplémentaire.'
  },
  {
    icon: IconComputer,
    title: 'PC Manager',
    description: 'Bientôt disponible : gestion de votre budget depuis votre PC via connexion WiFi locale.'
  },
  {
    icon: IconLocation,
    title: 'Localisation GPS',
    description: 'Bientôt disponible : enregistrement automatique de la localisation de vos transactions avec géocodage.'
  }
]

export default function PersonnalisationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Personnalisez Votre Expérience
              <span className="block text-purple-600 mt-2">Selon Vos Besoins</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Adaptez Flut Budget à votre style : thème, langues, devises, paramètres avancés.
              Créez l'expérience de gestion budgétaire qui vous correspond parfaitement.
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
              <Link href="/securite" className="btn-secondary text-lg px-8 py-4">
                Découvrir la Sécurité →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catégories de Personnalisation */}
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
              Personnalisation Complète
            </h2>
            <p className="section-subtitle">
              Adaptez chaque aspect de l'application à vos préférences
            </p>
          </motion.div>

          <div className="space-y-24">
            {personalizationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <category.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative flex justify-center">
                  <div className="relative w-[280px] h-[580px]">
                    <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                        <Image
                          src={category.image}
                          alt={category.title}
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

      {/* Paramètres Avancés */}
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
              Paramètres Avancés
            </h2>
            <p className="section-subtitle">
              Des options puissantes pour les utilisateurs expérimentés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedSettings.map((setting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <setting.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{setting.title}</h3>
                <p className="text-gray-600">{setting.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités à Venir */}
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
              Fonctionnalités à Venir
            </h2>
            <p className="section-subtitle">
              Nous travaillons constamment à améliorer Flut Budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-dashed border-purple-200"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Bientôt disponible
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi Personnaliser ?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Une application adaptée à vos besoins est une application que vous utiliserez régulièrement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
                <IconSmile className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Confort</h3>
              <p className="text-purple-100 text-sm">Interface adaptée à vos préférences</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
                <IconZap className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Efficacité</h3>
              <p className="text-purple-100 text-sm">Accès rapide à vos fonctionnalités favorites</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
                <IconGlobe className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Accessibilité</h3>
              <p className="text-purple-100 text-sm">5 langues disponibles pour tous</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
                <IconDiamond className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Exclusivité</h3>
              <p className="text-purple-100 text-sm">Votre application, votre façon</p>
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
              Personnalisez Votre Budget Dès Aujourd'hui
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Téléchargez Flut Budget gratuitement et créez l'expérience de gestion budgétaire parfaite pour vous.
              Toutes les fonctionnalités de personnalisation sont disponibles gratuitement.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
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

