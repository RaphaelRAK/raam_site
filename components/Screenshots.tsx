'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone')
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % screenshots.length
        // Scroll to the next item
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const scrollAmount = container.scrollWidth / screenshots.length
          container.scrollTo({
            left: nextIndex * scrollAmount,
            behavior: 'smooth'
          })
        }
        return nextIndex
      })
    }, 3000) // Change every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isAutoScrolling])

  const nextScreenshot = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % screenshots.length
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollAmount = container.scrollWidth / screenshots.length
        container.scrollTo({
          left: nextIndex * scrollAmount,
          behavior: 'smooth'
        })
      }
      return nextIndex
    })
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000) // Resume auto-scroll after 5 seconds
  }

  const prevScreenshot = () => {
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + screenshots.length) % screenshots.length
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollAmount = container.scrollWidth / screenshots.length
        container.scrollTo({
          left: prevIndex * scrollAmount,
          behavior: 'smooth'
        })
      }
      return prevIndex
    })
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000) // Resume auto-scroll after 5 seconds
  }

  const goToScreenshot = (index: number) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.scrollWidth / screenshots.length
      container.scrollTo({
        left: index * scrollAmount,
        behavior: 'smooth'
      })
    }
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000) // Resume auto-scroll after 5 seconds
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-100/50 backdrop-blur-sm">
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

        {/* Screenshot Display - Multiple Phones Side by Side */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Device Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
                <button
                  onClick={() => setDeviceType('iphone')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    deviceType === 'iphone'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  iPhone 14 Pro
                </button>
                <button
                  onClick={() => setDeviceType('android')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    deviceType === 'android'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Android
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevScreenshot}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Précédent"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextScreenshot}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Suivant"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Scrollable Gallery */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex gap-8 px-4" style={{ width: 'max-content' }}>
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={`${deviceType}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div className="relative w-[240px] h-[500px]">
                      {deviceType === 'iphone' ? (
                        <>
                          {/* Phone Frame - iPhone 14 Pro style */}
                          <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                              {/* Dynamic Island */}
                              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10 border border-gray-700">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                                </div>
                              </div>
                              
                              {/* Screen Content with Image */}
                              <div className="w-full h-full relative overflow-hidden">
                                <Image
                                  src={screenshot.image}
                                  alt={screenshot.title}
                                  fill
                                  className="object-contain"
                                  quality={90}
                                  sizes="240px"
                                  unoptimized
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Phone Frame - Android style */}
                          <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-1.5 shadow-2xl">
                            <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                              {/* Screen Content with Image */}
                              <div className="w-full h-full relative overflow-hidden">
                                <Image
                                  src={screenshot.image}
                                  alt={screenshot.title}
                                  fill
                                  className="object-contain"
                                  quality={90}
                                  sizes="240px"
                                  unoptimized
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mt-4 w-[240px] text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToScreenshot(index)}
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

