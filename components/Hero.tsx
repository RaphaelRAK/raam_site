'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="section-container">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            La Solution Ultime
            <br />
            pour Maîtriser Vos Finances
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Flut Budget est bien plus qu'une simple application de gestion budgétaire.
            C'est votre compagnon financier intelligent, 100% local et sécurisé.
          </motion.p>

          {/* Phone Mockups Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Phone 1 - Liste */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] transform rotate-[-8deg] hover:rotate-[-5deg] transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <div className="w-full h-full relative">
                      <Image
                        src="/screen_shoot/liste.jpg"
                        alt="Vue Liste - Flut Budget"
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Calendrier (Center, slightly larger) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative w-[220px] h-[440px] md:w-[280px] md:h-[560px] transform rotate-[2deg] hover:rotate-[0deg] transition-transform duration-300 z-10"
              >
                <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <div className="w-full h-full relative">
                      <Image
                        src="/screen_shoot/calendrier.jpg"
                        alt="Vue Calendrier - Flut Budget"
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Statistiques */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] transform rotate-[8deg] hover:rotate-[5deg] transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <div className="w-full h-full relative">
                      <Image
                        src="/screen_shoot/statcamemebert.jpg"
                        alt="Statistiques - Flut Budget"
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.flutbudget.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Télécharger sur Google Play
            </a>
            <a
              href="#"
              className="btn-secondary text-lg"
              onClick={(e) => {
                e.preventDefault()
                alert('Disponible bientôt sur l\'App Store')
              }}
            >
              Télécharger sur l'App Store
            </a>
          </motion.div>

          {/* Launch Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Bientôt Disponible
                </h3>
                <p className="text-lg text-gray-700">
                  Flut Budget sera bientôt disponible sur Google Play et l'App Store.
                  <br />
                  Rejoignez-nous pour une gestion financière 100% privée et sécurisée !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

