import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Faqs from './components/Faqs'
import Contact from './components/Contact'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Faqs />
      <Contact />
    </div>
  )
}
