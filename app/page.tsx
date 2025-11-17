import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Security from '@/components/Security'
import WhyChoose from '@/components/WhyChoose'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Security />
      <WhyChoose />
      <Download />
      <Footer />
    </main>
  )
}

