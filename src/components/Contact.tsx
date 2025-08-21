import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Download,
  Linkedin,
  Github
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+254 700 788 353",
      link: "tel:+254700788353",
      description: "Available 9 AM - 6 PM EAT"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "preciousshilisia@gmail.com",
      link: "mailto:preciousshilisia@gmail.com",
      description: "Response within 24 hours"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: null,
      description: "Available for remote work"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Availability",
      value: "Full-time Remote",
      link: null,
      description: "Ready to start immediately"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/precious-shilisia",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/precious-shilisia",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:preciousshilisia@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring exceptional customer service expertise to your team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking new opportunities to contribute my customer service 
                expertise to a dynamic team. Whether you need help with healthcare support, 
                insurance services, or general customer success, I'm here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary hover:text-primary-glow transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Card className="p-6 bg-gradient-card border-border border-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Download Resume</h4>
                    <p className="text-sm text-muted-foreground">Get the complete professional profile</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume PDF
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                <p className="text-muted-foreground">
                  I'll respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@company.com"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Job Opportunity - Customer Service Position"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about the position and your requirements..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Card className="p-8 bg-gradient-card border-primary/30">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Start Making a Difference
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With 95%+ first-contact resolution and HIPAA certification, 
                I'm ready to deliver exceptional customer service for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = 'tel:+254700788353'}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:preciousshilisia@gmail.com'}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;