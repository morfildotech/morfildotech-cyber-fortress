import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Shield, Clock, FileText } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the scope of your penetration testing services?",
      answer: "Our penetration testing covers web applications, mobile applications (Android & iOS), network infrastructure, cloud environments (AWS, Azure, GCP), APIs, and thick/thin client applications. We follow industry-standard methodologies including OWASP Top 10, SANS 25, and custom testing approaches based on your specific requirements."
    },
    {
      question: "How do you ensure compliance with industry standards?",
      answer: "We provide comprehensive ISO 27001 audit consultancy including gap analysis, risk management, policy review, and internal audits. Our team helps organizations achieve and maintain compliance readiness while implementing best practices for information security management systems."
    },
    {
      question: "What are your typical project timelines?",
      answer: "Project timelines vary based on scope and complexity. A standard web application VAPT typically takes 5-10 business days, while comprehensive network infrastructure assessments may require 2-3 weeks. Cloud security audits generally take 1-2 weeks depending on the environment size and complexity."
    },
    {
      question: "What deliverables do you provide after testing?",
      answer: "We provide detailed technical reports including executive summaries, vulnerability findings with CVSS scores, risk assessments, proof-of-concept exploits, remediation guidance, and compliance mappings. All reports include actionable recommendations prioritized by risk level and business impact."
    },
    {
      question: "Do you offer retainer services for ongoing security support?",
      answer: "Yes, we offer SaaS Security Team services providing 360° protection with continuous monitoring, regular assessments, incident response support, and dedicated security consultancy. This ensures your organization maintains strong security posture as threats evolve."
    },
    {
      question: "How do you handle confidential information during assessments?",
      answer: "Confidentiality is paramount in our operations. We sign comprehensive NDAs, follow strict data handling protocols, use secure communication channels, and ensure all findings are reported only to authorized personnel. Our team maintains the highest standards of professional ethics and integrity."
    },
    {
      question: "What certifications do your security professionals hold?",
      answer: "Our team holds industry-leading certifications including OSCP, CEH, CISSP, CISM, SANS GIAC certifications, and cloud-specific credentials (AWS, Azure, GCP). We continuously invest in training to stay current with emerging threats and testing methodologies."
    },
    {
      question: "Can you provide training for our internal teams?",
      answer: "Absolutely! We offer corporate cybersecurity and awareness training programs designed to empower employees with knowledge of modern threats, phishing defense, secure coding practices, and incident response procedures. Training can be customized to your organization's specific needs and risk profile."
    },
    {
      question: "How do you stay updated with the latest security threats?",
      answer: "Our team actively participates in security research, bug bounty programs, and responsible disclosure initiatives with major tech companies. We maintain relationships with security communities, attend conferences, and continuously monitor threat intelligence to ensure our testing methodologies reflect current attack vectors."
    },
    {
      question: "What makes Morfildotech different from other cybersecurity firms?",
      answer: "Our proven track record with major tech giants like Google, Microsoft, Facebook, and Apple sets us apart. We combine deep technical expertise with business understanding, provide transparent communication throughout engagements, and deliver actionable insights that drive real security improvements for our clients."
    }
  ];

  const categories = [
    {
      icon: Shield,
      title: "Security Testing",
      description: "Questions about VAPT, methodologies, and testing approaches",
      count: "4 questions"
    },
    {
      icon: FileText,
      title: "Compliance & Reports",
      description: "Information about deliverables, compliance, and documentation",
      count: "3 questions"
    },
    {
      icon: Clock,
      title: "Process & Timeline",
      description: "Project timelines, processes, and service delivery",
      count: "3 questions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our cybersecurity services, processes, and approach to protecting your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-cyber cyber-glow mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-accent">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{category.description}</p>
                  <p className="text-sm font-semibold text-accent">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find detailed answers to help you understand our cybersecurity services better
              </p>
            </div>
            
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                      <AccordionTrigger className="text-left hover:text-accent transition-colors">
                        <span className="flex items-start space-x-3">
                          <HelpCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our cybersecurity experts are here to help. Don't hesitate to reach out for personalized answers to your specific security concerns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-accent">Technical Questions</h3>
                  <p className="text-muted-foreground mb-4">
                    Need details about our testing methodologies, compliance requirements, or technical capabilities?
                  </p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Link to="/contact">Ask Technical Team</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-accent">Project Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    Questions about timelines, pricing, or how to get started with your cybersecurity assessment?
                  </p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-cyber rounded-2xl p-8 cyber-glow">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Contact our cybersecurity experts today to discuss your specific requirements and get a customized security assessment plan.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;