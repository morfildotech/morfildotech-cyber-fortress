import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/20" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Safeguard your business with{" "}
              <span className="text-accent">Morfildotech</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Choose Morfildotech for confidentiality, integrity, and transparency. 
              We have successfully delivered <span className="text-accent font-semibold">100+ penetration tests</span> for enterprises worldwide.
              Trust us to protect your digital assets and stay ahead of cyber threats.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <p className="text-accent font-semibold text-lg">
                ✓ 100+ Successful Penetration Tests Delivered
              </p>
              <p className="text-muted-foreground mt-2">
                Trusted by Fortune 500 companies and growing startups alike
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button asChild size="lg" className="cyber-glow text-lg px-8 py-6 hover-scale">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-scale">
                <a href="mailto:info@morfildotech.com?subject=Cybersecurity Consultation Request&body=Hi Morfildotech Team,%0D%0A%0D%0AI am interested in discussing cybersecurity solutions for my organization. Please let me know the next steps to schedule a consultation.%0D%0A%0D%0ARegards">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Morfildotech?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert professionals deliver comprehensive cybersecurity solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description: "Cutting-edge security measures to protect your digital assets"
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Trusted by major tech giants worldwide for security excellence"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with extensive cybersecurity experience"
              },
              {
                icon: Target,
                title: "Precision Testing",
                description: "Comprehensive VAPT and security audits with detailed reports"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover-scale animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders who trust Morfildotech with their cybersecurity needs
            </p>
            <Button asChild size="lg" className="cyber-glow text-lg px-8 py-6 hover-scale">
              <a href="mailto:info@morfildotech.com?subject=Cybersecurity Services Inquiry&body=Hi Morfildotech Team,%0D%0A%0D%0AI would like to discuss your cybersecurity services for my organization. Could we schedule a consultation to understand how you can help secure our business?%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0ABest regards">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;