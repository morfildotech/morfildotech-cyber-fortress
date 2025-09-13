import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Rocket, Award, Heart, Code, Shield, Lightbulb, Target } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Innovation-Driven",
      description: "Work on cutting-edge cybersecurity projects with the latest technologies and methodologies."
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a passionate team of cybersecurity professionals who support each other's growth."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning opportunities with industry certifications and skill development programs."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements that prioritize both professional excellence and personal well-being."
    }
  ];

  const skills = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "VAPT expertise across web, mobile, and network applications"
    },
    {
      icon: Code,
      title: "Security Research",
      description: "Vulnerability research and responsible disclosure experience"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative approach to identifying and solving security challenges"
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Meticulous attention to detail in security assessments and documentation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Join Our <span className="text-accent">Cybersecurity</span> Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We believe our greatest asset is our passionate team. We foster growth, innovation, and collaboration in an environment where cybersecurity professionals thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Morfildotech?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that's making a real difference in global cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Look For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We seek talented individuals with passion for cybersecurity and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Join us in exciting cybersecurity projects that make a global impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Penetration Tester</CardTitle>
                  <p className="text-muted-foreground">Senior Level • Full-time</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Lead VAPT assessments for web applications, mobile apps, and network infrastructure. 
                    Work with Fortune 500 clients on critical security projects.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3+ years of penetration testing experience</li>
                    <li>• OSCP, CEH, or similar certifications preferred</li>
                    <li>• Strong knowledge of OWASP Top 10</li>
                    <li>• Experience with Burp Suite, Metasploit, Nmap</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Security Researcher</CardTitle>
                  <p className="text-muted-foreground">Mid-Senior Level • Full-time</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Research emerging threats, develop new testing methodologies, and contribute to 
                    responsible disclosure programs with major tech companies.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2+ years in security research or bug bounty</li>
                    <li>• Experience with reverse engineering</li>
                    <li>• Strong programming skills (Python, C/C++, Java)</li>
                    <li>• Published security research preferred</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Cloud Security Specialist</CardTitle>
                  <p className="text-muted-foreground">Senior Level • Full-time</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Conduct comprehensive cloud security audits across AWS, Azure, and GCP platforms. 
                    Help enterprises secure their cloud infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3+ years of cloud security experience</li>
                    <li>• AWS/Azure/GCP certifications</li>
                    <li>• Knowledge of container security (Docker/K8s)</li>
                    <li>• Experience with IAM and compliance frameworks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Junior Security Analyst</CardTitle>
                  <p className="text-muted-foreground">Entry Level • Full-time</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Perfect opportunity for cybersecurity graduates to start their career. 
                    Work alongside senior experts on real-world security assessments.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cybersecurity degree or relevant certifications</li>
                    <li>• Basic knowledge of networking and web technologies</li>
                    <li>• Eagerness to learn and grow in cybersecurity</li>
                    <li>• Strong analytical and communication skills</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented cybersecurity professionals to join our growing team. 
              Even if you don't see a specific role that matches your skills, we'd love to hear from you.
            </p>
            
            <div className="bg-gradient-cyber rounded-2xl p-8 cyber-glow mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">How to Apply</h3>
              <p className="text-white/90 mb-6 text-lg">
                Send your CV/Resume along with a cover letter explaining why you'd be a great fit for Morfildotech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-white font-semibold">📧 morfildotech@gmail.com</span>
                <Button variant="secondary" size="lg" className="font-semibold">
                  <a href="mailto:morfildotech@gmail.com">Send Application</a>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Have questions about working at Morfildotech? We'd be happy to discuss opportunities with you.
              </p>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;