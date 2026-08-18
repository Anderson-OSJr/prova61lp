import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Team } from '@/components/sections/Team'
import { Franchise } from '@/components/sections/Franchise'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Franchise />
      <CTA />
      <Footer />
    </main>
  )
}