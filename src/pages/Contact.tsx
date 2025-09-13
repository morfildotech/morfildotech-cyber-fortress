import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Shield, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "info@morfildotech.com",
      action: "mailto:info@morfildotech.com"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 Hours",
      action: null
    },
    {
      icon: Shield,
      title: "Security First",
      description: "All communications are",
      contact: "Confidential & Secure",
      action: null
    }
  ];

  const services = [
    "Cloud Security Audit",
    "Web Application VAPT",
    "Mobile Application Security",
    "Network Infrastructure Security",
    "API Security Testing",
    "ISO 27001 Consultancy",
    "Corporate Training",
    "SaaS Security Team"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-accent">Secure</span> Your Business Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to strengthen your cybersecurity posture? Contact Morfildotech today and let our experts protect your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{info.description}</p>
                  {info.action ? (
                    <a href={info.action} className="font-semibold text-accent hover:text-accent/80 transition-colors">
                      {info.contact}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">{info.contact}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your cybersecurity needs and we'll get back to you promptly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-input/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-input/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your cybersecurity requirements, timeline, and any specific concerns..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-input/50 resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full cyber-glow text-lg py-6 hover-scale">
                      Get in Touch
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services & Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30">
                      <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="card-glow bg-gradient-cyber cyber-glow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                    <p className="text-white/90 mb-4">
                      Need a comprehensive cybersecurity strategy? Our enterprise team can design custom solutions for your organization.
                    </p>
                    <Button variant="secondary" size="lg">
                      <a href="mailto:info@morfildotech.com?subject=Enterprise Cybersecurity Consultation">
                        Schedule Consultation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/30 rounded-lg p-6 border border-border/40">
                <h4 className="font-semibold mb-3 text-accent">Why Choose Morfildotech?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Trusted by major tech companies worldwide</li>
                  <li>✓ Expert team with industry certifications</li>
                  <li>✓ Comprehensive VAPT and security audits</li>
                  <li>✓ Detailed reports with actionable insights</li>
                  <li>✓ Confidential and transparent process</li>
                  <li>✓ 24/7 support for critical security issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait for a security breach. Contact Morfildotech today and take the first step towards comprehensive cybersecurity protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cyber-glow text-lg px-8 py-6 hover-scale">
                <a href="mailto:info@morfildotech.com?subject=Security Consultation Request&body=Hi Morfildotech Team,%0D%0A%0D%0AI am interested in discussing cybersecurity solutions for my organization. We need comprehensive security assessment and would like to understand how your expertise can help protect our business.%0D%0A%0D%0APlease let me know your availability for a consultation.%0D%0A%0D%0ABest regards">Email Us Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-scale">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;