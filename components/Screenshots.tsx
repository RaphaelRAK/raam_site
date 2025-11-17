'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    id: 'transactions-list',
    title: 'Vue Liste',
    description: 'Parcourez toutes vos transactions dans l\'ordre chronologique avec filtres avancés',
    image: '/screen_shoot/liste.jpg',
  },
  {
    id: 'transactions-calendar',
    title: 'Vue Calendrier',
    description: 'Visualisez toutes vos transactions sur un calendrier interactif',
    image: '/screen_shoot/calendrier.jpg',
  },
  {
    id: 'transactions-week',
    title: 'Vue Hebdomadaire',
    description: 'Suivez vos finances semaine par semaine avec totaux détaillés',
    image: '/screen_shoot/semaine.jpg',
  },
  {
    id: 'statistics',
    title: 'Statistiques',
    description: 'Analysez vos dépenses et revenus avec des graphiques interactifs',
    image: '/screen_shoot/statcamemebert.jpg',
  },
  {
    id: 'settings',
    title: 'Paramètres',
    description: 'Personnalisez votre application selon vos préférences',
    image: '/screen_shoot/parametre1.jpg',
  },
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextScreenshot = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Captures d'écran
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Découvrez les principales fonctionnalités de Flut Budget
        </motion.p>

        {/* Screenshot Display - Two Phones Side by Side */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevScreenshot}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2"
                aria-label="Précédent"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {screenshots[currentIndex].title}
                </h3>
                <p className="text-gray-600">{screenshots[currentIndex].description}</p>
              </div>

              <button
                onClick={nextScreenshot}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2"
                aria-label="Suivant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Two Phones */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* iPhone */}
              <motion.div
                key={`iphone-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative w-[280px] h-[580px]">
                  {/* Phone Frame - iPhone style */}
                  <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
                      
                      {/* Screen Content with Image */}
                      <div className="w-full h-full relative overflow-hidden">
                        <Image
                          src={screenshots[currentIndex].image}
                          alt={screenshots[currentIndex].title}
                          fill
                          className="object-contain"
                          quality={90}
                          priority={currentIndex === 0}
                          sizes="280px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600 font-medium">iPhone</p>
              </motion.div>

              {/* Android */}
              <motion.div
                key={`android-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="relative w-[280px] h-[580px]">
                  {/* Phone Frame - Android style */}
                  <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-1.5 shadow-2xl">
                    <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                      {/* Screen Content with Image */}
                      <div className="w-full h-full relative overflow-hidden">
                        <Image
                          src={screenshots[currentIndex].image}
                          alt={screenshots[currentIndex].title}
                          fill
                          className="object-contain"
                          quality={90}
                          priority={currentIndex === 0}
                          sizes="280px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600 font-medium">Android</p>
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Aller à la capture ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

