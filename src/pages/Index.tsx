import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update document title and meta description
    document.title = "Precious Shilisia | Customer Service Professional | Healthcare & Insurance Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional Customer Service Representative with 3+ years experience in healthcare and insurance. 95%+ first-contact resolution. HIPAA certified. Remote work specialist.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
