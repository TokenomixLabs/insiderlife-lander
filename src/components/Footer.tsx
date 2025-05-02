
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Mail, Youtube, Twitter, Facebook, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-insiderDark-light/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/fe4a3c75-e706-4c9e-9a22-d0dd85c0f199.png" 
                alt="InsiderLife Logo" 
                className="h-8"
              />
            </Link>
            <p className="text-white/70 max-w-xs">
              Empowering entrepreneurs and creators with AI-driven strategies for the digital economy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-orbitron">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><Link to="/circle" className="text-white/70 hover:text-white transition-colors">Sovereign Circle</Link></li>
              <li><Link to="/aifreedomcode" className="text-white/70 hover:text-white transition-colors">AI FREEDOM CODE</Link></li>
              <li><Link to="/sovereign-access" className="text-white/70 hover:text-white transition-colors">Sovereign Access</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-orbitron">Contact Us</h4>
            <p className="flex items-center text-white/70 mb-2">
              <Phone className="h-5 w-5 mr-2" /> (720) 734-8877
            </p>
            <p className="flex items-center text-white/70 mb-2">
              <Mail className="h-5 w-5 mr-2" /> hello@insiderlife.com
            </p>
            <p className="flex items-center text-white/70 mb-6">
              <HelpCircle className="h-5 w-5 mr-2" /> 
              <Link to="/support" className="hover:text-white transition-colors">
                Get Support
              </Link>
            </p>
            
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2 font-orbitron">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors transform hover:scale-110">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} InsiderLife LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
