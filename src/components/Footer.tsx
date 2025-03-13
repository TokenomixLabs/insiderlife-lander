
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Mail, Youtube, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-insiderDark-light/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-insiderBlue to-insiderPurple bg-clip-text text-transparent mb-4">
              InsiderLife
            </h3>
            <p className="text-white/70 max-w-xs">
              Empowering entrepreneurs and creators with AI-driven strategies for the digital economy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#offerings" className="text-white/70 hover:text-white transition-colors">What We Offer</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="flex items-center text-white/70 mb-2">
              <Mail className="h-5 w-5 mr-2" /> admin@insiderlife.com
            </p>
            
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-insiderBlue transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} InsiderLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
