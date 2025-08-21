import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Customer Support Specialist",
      company: "ServiceFirst Solutions Inc",
      location: "Remote",
      period: "Aug 2024 – May 2025",
      type: "Current",
      achievements: [
        "Maintained 95% first-contact resolution rate across all support channels",
        "Guided plan participants through eligibility inquiries and policy changes",
        "Maintained accurate records in Salesforce CRM with complete documentation",
        "Coordinated with claims, billing, and underwriting teams for high-priority requests",
        "Recommended workflow improvements, reducing repeat inquiries by 15%",
        "Supported phone, email, and chat communication in full HIPAA compliance"
      ],
      skills: ["Salesforce", "HIPAA Compliance", "Multi-channel Support", "Process Improvement"]
    },
    {
      title: "Client Service Representative",
      company: "Taila LTD",
      location: "Remote",
      period: "Jun 2023 – Jun 2024",
      type: "Previous",
      achievements: [
        "Assisted healthcare and insurance participants with annuity and benefit plans",
        "Processed participant change requests with precise record maintenance",
        "Trained new team members on benefits explanation and conflict resolution",
        "Improved department-wide first-contact resolution by 12%",
        "Flagged systemic issues for leadership review to improve participant experience"
      ],
      skills: ["Team Training", "Benefits Administration", "Conflict Resolution", "Process Analysis"]
    },
    {
      title: "Technical Support Representative",
      company: "Super Easy Tech LTD",
      location: "Remote",
      period: "Jun 2022 – Jan 2023",
      type: "Previous",
      achievements: [
        "Delivered technical support for healthcare and benefit management systems",
        "Resolved complex system issues and maintained knowledge base resources",
        "Maintained over 90% resolution rate across multiple participant channels",
        "Simplified technical explanations to improve participant understanding and satisfaction"
      ],
      skills: ["Technical Support", "System Troubleshooting", "Knowledge Management", "SLA Adherence"]
    },
    {
      title: "Administrative Support Assistant",
      company: "Independent Customer Support Consultant",
      location: "Remote",
      period: "2021 – 2023",
      type: "Consulting",
      achievements: [
        "Managed confidential participant records for multiple healthcare clients with 100% accuracy",
        "Prepared benefit transaction documentation and standardized change request processes",
        "Assisted in cross-department coordination for correct and timely benefit payments",
        "Supported multi-channel participant inquiries while maintaining high-quality service benchmarks"
      ],
      skills: ["Data Management", "Process Standardization", "Multi-client Support", "Quality Assurance"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current': return 'bg-primary text-primary-foreground';
      case 'Previous': return 'bg-secondary text-secondary-foreground';
      case 'Consulting': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3+ years of dedicated customer service excellence in healthcare and insurance
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card group animate-fade-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Header */}
                <div className="lg:w-1/3 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                      {exp.type === 'Current' && (
                        <div className="flex items-center gap-1 text-primary">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">Active</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
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

                {/* Achievements */}
                <div className="lg:w-2/3">
                  <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex} 
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;