import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "95%+ Resolution Rate",
      description: "First-contact resolution across all channels"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "60+ Daily Interactions",
      description: "Phone, email, and chat support"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Healthcare & insurance expertise"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Certified",
      description: "Full compliance with data privacy standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold mb-4">My Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a dedicated Customer Service Professional, I've spent over 3 years 
                specializing in healthcare and insurance support, helping participants 
                navigate complex benefit plans and policy changes with compassion and precision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a passion for helping others understand their 
                benefits and resolve their concerns efficiently. Through continuous 
                learning and hands-on experience, I've developed expertise in claims 
                resolution, policy updates, and participant onboarding while maintaining 
                strict compliance with HIPAA and data privacy standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I take pride in translating complex plan information into clear, 
                actionable guidance that empowers participants to make informed 
                decisions about their healthcare and insurance needs.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary">Remote Work Expert</Badge>
                <Badge variant="secondary">Multi-channel Support</Badge>
                <Badge variant="secondary">Process Improvement</Badge>
                <Badge variant="secondary">Team Training</Badge>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Card className="p-8 bg-gradient-card border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Academic Foundation</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">
                  Bachelor of Education ICT
                </h4>
                <p className="text-muted-foreground">
                  The University of Nairobi, Kenya
                </p>
                <p className="text-sm text-muted-foreground">
                  June 2025
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;