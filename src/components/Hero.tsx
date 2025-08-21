import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import preciousPortrait from '@/assets/precious-portrait.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Code Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-code-overlay font-mono text-sm animate-float">
          {`function resolveCustomerIssue() {
  return {
    satisfaction: "95%+",
    resolution: "first-contact",
    compliance: "HIPAA-certified"
  }
}`}
        </div>
        <div className="absolute top-1/3 right-20 text-code-overlay font-mono text-sm animate-float" style={{animationDelay: '1s'}}>
          {`const customerSupport = {
  channels: ["phone", "email", "chat"],
  experience: "3+ years",
  specialization: "healthcare & insurance"
}`}
        </div>
        <div className="absolute bottom-32 left-1/4 text-code-overlay font-mono text-sm animate-float" style={{animationDelay: '2s'}}>
          {`if (participantNeedsHelp) {
  provideSolution();
  updateDocumentation();
  ensureCompliance();
}`}
        </div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Precious Shilisia | 
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Customer Service Expert
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Compassionate, detail-oriented Customer Service Professional with 3+ years' 
                experience in healthcare, insurance, and benefits administration. Achieving 95%+ 
                first-contact resolution while maintaining full HIPAA compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Hire Me Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('#experience')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Experience
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +254 700 788 353
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                preciousshilisia@gmail.com
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow"></div>
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden shadow-card group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={preciousPortrait} 
                    alt="Precious Shilisia - Customer Service Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:preciousshilisia@gmail.com"
          className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;