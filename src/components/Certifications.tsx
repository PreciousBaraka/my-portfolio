import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, CheckCircle, Shield, Users, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Customer Service Professional (CCSP)",
      organization: "NCSA - National Customer Service Association",
      year: "2021",
      type: "Professional Certification",
      icon: <Award className="w-6 h-6" />,
      description: "Comprehensive certification covering customer service excellence, communication strategies, and professional standards.",
      skills: ["Service Excellence", "Communication", "Problem Solving", "Professional Standards"]
    },
    {
      title: "HIPAA Compliance Training Certificate",
      organization: "Healthcare Compliance Training",
      year: "2022",
      type: "Compliance Certification",
      icon: <Shield className="w-6 h-6" />,
      description: "Specialized training in healthcare privacy regulations, data protection, and compliance requirements for healthcare customer service.",
      skills: ["Data Privacy", "Healthcare Compliance", "Risk Management", "Documentation"]
    },
    {
      title: "Conflict Resolution & De-escalation",
      organization: "ICMI - International Customer Management Institute",
      year: "2023",
      type: "Skills Certification",
      icon: <Users className="w-6 h-6" />,
      description: "Advanced training in conflict management, de-escalation techniques, and customer relationship preservation strategies.",
      skills: ["Conflict Resolution", "De-escalation", "Emotional Intelligence", "Customer Retention"]
    },
    {
      title: "Data Protection & Privacy Fundamentals",
      organization: "IAPP - International Association of Privacy Professionals",
      year: "2023",
      type: "Privacy Certification",
      icon: <Shield className="w-6 h-6" />,
      description: "Comprehensive understanding of data protection laws, privacy principles, and best practices for handling sensitive information.",
      skills: ["Data Protection", "Privacy Laws", "Compliance", "Information Security"]
    },
    {
      title: "Remote Work Professional Certification",
      organization: "Remote Work Association",
      year: "2024",
      type: "Professional Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Specialized certification in remote work best practices, digital collaboration, and maintaining service excellence in virtual environments.",
      skills: ["Remote Collaboration", "Digital Communication", "Time Management", "Virtual Team Work"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Certification': return 'bg-primary text-primary-foreground';
      case 'Compliance Certification': return 'bg-destructive text-destructive-foreground';
      case 'Skills Certification': return 'bg-accent text-accent-foreground';
      case 'Privacy Certification': return 'bg-secondary text-secondary-foreground';
      case 'Professional Development': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous professional development and industry-recognized certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card group animate-fade-in-up`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {cert.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Key Skills Acquired</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <Card className="p-8 bg-gradient-card border-border">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5</div>
                <p className="text-muted-foreground">Professional Certifications</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4</div>
                <p className="text-muted-foreground">Years of Learning</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-muted-foreground">Compliance Ready</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;