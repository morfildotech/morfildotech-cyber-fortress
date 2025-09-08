import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-surface border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-cyber cyber-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Morfildotech</h3>
                <p className="text-sm text-muted-foreground">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading cybersecurity partner specializing in VAPT, cloud audits, and corporate training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Cloud Security Audit</span></li>
              <li><span className="text-sm text-muted-foreground">Web Application VAPT</span></li>
              <li><span className="text-sm text-muted-foreground">Mobile App Security</span></li>
              <li><span className="text-sm text-muted-foreground">ISO 27001 Consultancy</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@morfildotech.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  info@morfildotech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Morfildotech Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Confidentiality • Integrity • Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;