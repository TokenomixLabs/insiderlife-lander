import React from 'react';
import { Mail, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoAsset from '@/assets/insiderlife-logo.png.asset.json';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-insiderDark">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6" aria-label="InsiderLife home">
              <img src={logoAsset.url} alt="InsiderLife" className="h-11 w-auto object-contain" />
            </Link>
            <p className="max-w-sm text-sm md:text-base text-white/60 leading-relaxed">
              A life-mastery ecosystem for people who intend to play at a higher level.
            </p>
            <p className="mt-6 font-orbitron text-[11px] tracking-[0.3em] uppercase text-white/40">
              Upgrade Your Reality.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-orbitron text-[11px] tracking-[0.28em] uppercase text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/godmode" className="text-white/70 hover:text-white transition-colors">GODMODE</Link></li>
              <li><Link to="/aifreedomcode" className="text-white/70 hover:text-white transition-colors">AI Freedom Code</Link></li>
              <li><Link to="/circle" className="text-white/70 hover:text-white transition-colors">The Circle</Link></li>
              <li><Link to="/sovereign-access" className="text-white/70 hover:text-white transition-colors">Sovereign Access</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-orbitron text-[11px] tracking-[0.28em] uppercase text-white/50 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-white/70">
                <Phone className="h-4 w-4 mr-3" /> (720) 734-8877
              </li>
              <li className="flex items-center text-white/70">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:hello@insiderlife.com" className="hover:text-white transition-colors">
                  hello@insiderlife.com
                </a>
              </li>
              <li className="flex items-center text-white/70">
                <HelpCircle className="h-4 w-4 mr-3" />
                <Link to="/support" className="hover:text-white transition-colors">Support</Link>
              </li>
            </ul>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} InsiderLife LLC. All rights reserved.</p>
          <p className="font-orbitron tracking-[0.28em] uppercase">People Ahead Together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
