import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Network, 
  Shield, 
  Globe, 
  Smartphone, 
  Code, 
  Monitor, 
  Container, 
  Award, 
  GraduationCap, 
  Users,
  Zap
} from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Security Audit",
      description: "Comprehensive assessment of cloud environments (AWS, Azure, GCP), covering design, architecture, IAM, encryption, misconfigurations, vulnerabilities, and disaster recovery readiness."
    },
    {
      icon: Network,
      title: "Network & Infrastructure Security",
      description: "In-depth review of network architecture, topology, segmentation, access controls, vulnerability scanning, wireless security, incident readiness, and overall infrastructure hardening."
    },
    {
      icon: Shield,
      title: "Firewall Security Audit",
      description: "Thorough analysis of firewall infrastructure including rules, redundancy, failover, traffic monitoring, and logging. Identify outdated or risky configurations and provide actionable improvements."
    },
    {
      icon: Globe,
      title: "Web Application VAPT",
      description: "Covers OWASP Top 10, SANS 25, SQL injection, XSS, authentication bypass, DoS testing, and logic flaws. Includes detailed reports with impact analysis and remediation guidance."
    },
    {
      icon: Smartphone,
      title: "Mobile Application VAPT",
      description: "Dynamic analysis, reverse engineering, API testing, privacy checks, and SDK security. Covers OWASP Mobile Top 10 and beyond, ensuring resilient mobile security."
    },
    {
      icon: Zap,
      title: "API VAPT",
      description: "Comprehensive API security testing including authentication, authorization, input validation, rate limiting, secure protocols, error handling, third-party integrations, and business logic testing."
    },
    {
      icon: Code,
      title: "Source Code Audit (SAST)",
      description: "Static Application Security Testing with deep code review to detect insecure coding practices, data handling flaws, improper authentication, use of libraries, compliance gaps, and architectural weaknesses."
    },
    {
      icon: Monitor,
      title: "Thick & Thin Client VAPT",
      description: "Security evaluation of client applications covering design, communication, authentication, input validation, secure data storage, error handling, and penetration testing."
    },
    {
      icon: Container,
      title: "Container & CI/CD Security",
      description: "Full review of Docker/Kubernetes images, configurations, runtime security, orchestration layers, and CI/CD pipeline integrations. Secure DevOps practices and continuous security monitoring."
    },
    {
      icon: Award,
      title: "Software Composition Analysis (SCA)",
      description: "SBOM generation, third-party component analysis, license compliance, vulnerability detection in open-source libraries, and supply chain security assessment."
    },
    {
      icon: GraduationCap,
      title: "Embedded Security Testing",
      description: "IoT device security, firmware analysis, hardware security testing, protocol analysis, and embedded system penetration testing for connected devices."
    },
    {
      icon: Users,
      title: "Dynamic Application Security Testing (DAST)",
      description: "Runtime security testing, behavioral analysis, real-time vulnerability detection, and comprehensive application security validation in production environments."
    },
    {
      icon: Shield,
      title: "Software Security Architecture Review",
      description: "Comprehensive review of software design patterns, security controls implementation, threat modeling, secure coding practices, and architectural security assessment."
    },
    {
      icon: Code,
      title: "SBOM & Supply Chain Security",
      description: "Software Bill of Materials generation, dependency analysis, supply chain risk assessment, third-party component security evaluation, and vendor security compliance."
    },
    {
      icon: Monitor,
      title: "Corporate Cybersecurity Training",
      description: "Training programs to empower employees with knowledge of modern threats, phishing defense, and secure digital practices."
    },
    {
      icon: Users,
      title: "SaaS Security Team (360° Protection)",
      description: "A dedicated security team to continuously monitor, manage, and consult on SaaS environments — providing holistic protection for evolving businesses."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/20" />
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Comprehensive <span className="text-accent">Cybersecurity</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Full-spectrum cybersecurity solutions tailored to protect your digital infrastructure and business operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 h-full hover-scale animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Security Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert team can design and implement tailored cybersecurity strategies for your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cyber-glow text-lg px-8 py-6 hover-scale">
                <a href="mailto:info@morfildotech.com?subject=Custom Security Solution Request&body=Hi Morfildotech Team,%0D%0A%0D%0AI am interested in discussing a custom cybersecurity solution for my organization. We would like to explore your comprehensive security services and understand how you can help protect our digital infrastructure.%0D%0A%0D%0APlease let me know the next steps to schedule a detailed consultation.%0D%0A%0D%0ARegards">Discuss Your Needs</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-scale">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;