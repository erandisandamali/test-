import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
import QuickLinks from '../components/QuickLinks';
import ContactInfo from '../components/ContactInfo';
import FooterFull from '../components/FooterFull';
export default function Home() {
  return (
    <main>
  <Hero />
  <About />
  <Services />
  <div className="section-divider">⸻</div>
  <QuickLinks />
  <div className="section-divider">⸻</div>
  <Projects />
  <Contact />
  <FooterFull />
  <ContactInfo />
    </main>
  );
}
