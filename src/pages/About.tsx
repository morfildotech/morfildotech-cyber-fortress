import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Target, Users, Award, CheckCircle, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    { company: "Meta/Facebook", logo: "👤", bgColor: "bg-blue-600" },
    { company: "Google", logo: "🔍", bgColor: "bg-red-500" },
    { company: "Microsoft", logo: "🪟", bgColor: "bg-blue-500" },
    { company: "Mozilla", logo: "🦊", bgColor: "bg-orange-500" },
    { company: "Apple", logo: "🍎", bgColor: "bg-gray-800" },
    { company: "Quora", logo: "❓", bgColor: "bg-red-600" },
    { company: "Tesla", logo: "⚡", bgColor: "bg-red-500" },
    { company: "Shopify", logo: "🛒", bgColor: "bg-green-600" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Confidentiality",
      description: "We maintain the highest standards of confidentiality in all our security assessments and client interactions."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Our testing methodologies and reporting are built on complete integrity and transparency."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and detailed reporting ensure you understand every aspect of your security posture."
    }
  ];

  const approach = [
    {
      icon: Zap,
      title: "Discover Vulnerabilities", 
      description: "We conduct thorough assessments to identify security weaknesses in your systems."
    },
    {
      icon: Target,
      title: "Simulate Real Attacks",
      description: "Our team performs controlled penetration testing to evaluate your defenses."
    },
    {
      icon: Award,
      title: "Actionable Reports",
      description: "Detailed documentation with clear remediation steps and risk prioritization."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Leading <span className="text-accent">Cybersecurity</span> Partner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Welcome to Morfildotech, your trusted cybersecurity partner specializing in VAPT, cloud audits, and corporate training. We are committed to excellence in confidentiality, integrity, and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every aspect of our cybersecurity services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We uncover vulnerabilities, simulate real-world attacks, and provide detailed actionable reports
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unleashing Excellence: Our Proud <span className="text-accent">Achievements</span> and Team Triumphs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our expert professionals have helped major tech giants like Google, Microsoft, Facebook, Mozilla, Apple, Quora, Shopify, Tesla, and more in identifying and resolving critical security loopholes as part of their responsible security disclosure programs. Their dedication has consistently strengthened global cybersecurity standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center p-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${achievement.bgColor} flex items-center justify-center`}>
                  <span className="text-2xl text-white">{achievement.logo}</span>
                </div>
                <h3 className="font-semibold text-accent">{achievement.company}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Morfildotech?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Tailored cybersecurity services for unique requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Expert professionals with proven industry track record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Trusted by industry leaders and Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Commitment to innovation and customer satisfaction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Comprehensive reporting with actionable insights</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-cyber rounded-2xl p-8 cyber-glow">
                  <Users className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                  <p className="text-white/90 mb-6">Certified cybersecurity professionals dedicated to protecting your business</p>
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/careers">Join Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the Morfildotech difference in cybersecurity excellence
            </p>
            <Button asChild size="lg" className="cyber-glow text-lg px-8 py-6">
              <Link to="/contact">Start Your Security Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;