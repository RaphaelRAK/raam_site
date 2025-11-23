'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconMobile, IconCloud, IconUser, IconGlobe, IconLock, IconShield, IconWifiOff } from '@/components/Icons'

const securityMethods = [
  {
    title: 'Code PIN',
    description: 'Code à 4 chiffres sécurisé avec hachage SHA-256',
    image: '/ecrans/pin-dark.jpeg',
    features: ['4 chiffres', 'Hachage SHA-256', 'Accès rapide', 'Sécurisé']
  },
  {
    title: 'Mot de Passe',
    description: 'Mot de passe personnalisé avec hachage SHA-256',
    image: '/ecrans/password-dark.jpeg',
    features: ['Personnalisable', 'Hachage SHA-256', 'Force variable', 'Confirmation requise']
  },
  {
    title: 'Biométrie',
    description: 'Empreinte digitale, Face ID ou Touch ID pour un déverrouillage instantané',
    image: '/ecrans/code-dark.jpeg',
    features: ['Empreinte digitale', 'Face ID / Touch ID', 'Déverrouillage rapide', 'Sécurité maximale']
  }
]

const privacyFeatures = [
  {
    icon: IconMobile,
    title: '100% Local',
    description: 'Toutes vos données sont stockées uniquement sur votre téléphone. Base de données SQLite sécurisée.'
  },
  {
    icon: IconCloud,
    title: 'Aucune Synchronisation Cloud',
    description: 'Vos transactions ne sont jamais envoyées sur des serveurs. Vos données ne quittent jamais votre appareil.'
  },
  {
    icon: IconUser,
    title: 'Pas de Compte Utilisateur',
    description: 'Aucune inscription requise, aucun email, aucune donnée personnelle collectée. Utilisation immédiate.'
  },
  {
    icon: IconWifiOff,
    title: 'Fonctionnement Hors Ligne',
    description: 'L\'application fonctionne entièrement sans connexion Internet. Vos données restent privées.'
  },
  {
    icon: IconShield,
    title: 'Chiffrement Flutter Secure Storage',
    description: 'Données sensibles chiffrées avec Flutter Secure Storage. Protection maximale de vos informations.'
  },
  {
    icon: IconLock,
    title: 'Verrouillage Automatique',
    description: 'Protection automatique à l\'ouverture de l\'app. Choisissez votre méthode de verrouillage préférée.'
  }
]

const securityGuarantees = [
  {
    title: 'Transparence Totale',
    description: 'Vous savez exactement où se trouvent vos données : sur votre téléphone uniquement. Aucune surprise.'
  },
  {
    title: 'Open Source Ready',
    description: 'Code source transparent. Vous pouvez vérifier comment vos données sont gérées et protégées.'
  },
  {
    title: 'Conformité RGPD',
    description: 'Respect total de la vie privée. Aucune donnée personnelle collectée, aucun traitement externe.'
  }
]

export default function SecuritePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sécurité et Confidentialité
              <span className="block text-red-600 mt-2">Au Cœur de Flut Budget</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vos données financières sont précieuses. C'est pourquoi nous garantissons une sécurité maximale
              avec un stockage 100% local, un chiffrement avancé et aucun envoi de données vers des serveurs.
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
              <Link href="/personnalisation" className="btn-secondary text-lg px-8 py-4">
                Découvrir les Paramètres →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthodes de Verrouillage */}
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
              Trois Méthodes de Verrouillage
            </h2>
            <p className="section-subtitle">
              Choisissez la méthode qui vous convient le mieux pour protéger votre application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {securityMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative w-full aspect-[9/16] bg-gray-100">
                  <Image
                    src={method.image}
                    alt={method.title}
                    fill
                    className="object-contain"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentialité */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Confidentialité Absolue
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Vos données financières ne quittent jamais votre téléphone. Aucune exception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-red-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
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
              Nos Garanties de Sécurité
            </h2>
            <p className="section-subtitle">
              Des engagements clairs pour votre tranquillité d'esprit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityGuarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 text-lg">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison */}
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
              Pourquoi Choisir Flut Budget ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-green-600 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Flut Budget</h3>
                    <p className="text-gray-700">
                      Stockage 100% local • Aucune synchronisation cloud • Pas de compte utilisateur • 
                      Chiffrement Flutter Secure Storage • Fonctionnement hors ligne
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">✗</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Autres Applications</h3>
                    <p className="text-gray-700">
                      Synchronisation cloud obligatoire • Compte utilisateur requis • Données envoyées sur serveurs • 
                      Publicités et tracking • Connexion Internet nécessaire • Abonnements payants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protégez Vos Données Financières
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Téléchargez Flut Budget et bénéficiez d'une sécurité maximale avec un stockage 100% local.
              Vos données ne quitteront jamais votre téléphone. Application gratuite.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
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

