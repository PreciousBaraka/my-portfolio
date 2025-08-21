import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
  Shield, 
  Database, 
  MessageCircle, 
  Phone, 
  Mail, 
  Users, 
  Clock,
  Monitor,
  FileText,
  Zap,
  CheckCircle
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Customer Service Excellence",
      icon: <Headphones className="w-6 h-6" />,
      skills: [
        { name: "Multi-Channel Communication", level: 95, description: "Phone, Email, Chat" },
        { name: "First-Contact Resolution", level: 95, description: "95%+ success rate" },
        { name: "Conflict Resolution & De-escalation", level: 92, description: "ICMI Certified" },
        { name: "Quality Assurance & Documentation", level: 98, description: "Meticulous record keeping" }
      ]
    },
    {
      title: "Healthcare & Insurance Expertise",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Benefits Administration", level: 94, description: "Health, Welfare, Pension Plans" },
        { name: "Claims Resolution", level: 90, description: "Complex case handling" },
        { name: "Policy Change Processing", level: 93, description: "Plan updates & modifications" },
        { name: "HIPAA Compliance", level: 100, description: "Certified & compliant" }
      ]
    },
    {
      title: "Technical Proficiency",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "CRM Platforms", level: 88, description: "Salesforce, Five9" },
        { name: "Microsoft Office Suite", level: 92, description: "Advanced user" },
        { name: "Database Navigation", level: 85, description: "Knowledge base management" },
        { name: "Data Entry", level: 95, description: "60+ WPM accuracy" }
      ]
    }
  ];

  const coreCompetencies = [
    { icon: <Users className="w-5 h-5" />, title: "Participant Benefits & Claims Resolution" },
    { icon: <Shield className="w-5 h-5" />, title: "Health, Welfare, and Pension Plan Support" },
    { icon: <FileText className="w-5 h-5" />, title: "Policy Change Processing & Plan Updates" },
    { icon: <MessageCircle className="w-5 h-5" />, title: "Multi-Channel Communication" },
    { icon: <Database className="w-5 h-5" />, title: "CRM Platforms: Salesforce, Five9" },
    { icon: <Shield className="w-5 h-5" />, title: "HIPAA & Data Privacy Compliance" },
    { icon: <CheckCircle className="w-5 h-5" />, title: "First-Call/First-Contact Resolution (FCR)" },
    { icon: <Users className="w-5 h-5" />, title: "Conflict Resolution & De-escalation" },
    { icon: <FileText className="w-5 h-5" />, title: "Quality Assurance & Documentation" },
    { icon: <Clock className="w-5 h-5" />, title: "Time Management & Remote Work Proficiency" }
  ];

  const tools = [
    { name: "Salesforce", category: "CRM" },
    { name: "Five9", category: "CRM" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Live Chat Platforms", category: "Support" },
    { name: "Multi-line Phone Systems", category: "Communication" }
  ];

  return (
    <section id="skills" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in customer service, healthcare support, and technical proficiency
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className={`p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card animate-fade-in-up`}
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Core Competencies Grid */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {coreCompetencies.map((competency, index) => (
              <Card 
                key={index}
                className="p-4 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group text-center"
              >
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {competency.icon}
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {competency.title}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Tools */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technical Tools & Platforms
          </h3>
          <Card className="p-8 bg-gradient-card border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group">
                  <div className="p-2 rounded bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;