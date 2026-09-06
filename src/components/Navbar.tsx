import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoAsset from '@/assets/insiderlife-logo.png.asset.json';

type NavItem = { label: string; hash?: string; to?: string };

const navItems: NavItem[] = [
  { label: 'Why InsiderLife', hash: '#why' },
  { label: 'GODMODE', to: '/godmode' },
  { label: 'Intelligence', hash: '#intelligence' },
  { label: 'Community', hash: '#community' },
  { label: 'Experiences', hash: '#experiences' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const goToHash = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-insiderDark/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-gradient-to-b from-insiderDark/70 to-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 h-[80px] flex items-center justify-between gap-6">
        <Link to="/" aria-label="InsiderLife home" className="shrink-0">
          <img src={logoAsset.url} alt="InsiderLife" className="h-9 md:h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="font-orbitron text-[11px] tracking-[0.22em] uppercase text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => goToHash(item.hash!)}
                className="font-orbitron text-[11px] tracking-[0.22em] uppercase text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/circle"
            className="hidden sm:inline-flex items-center bg-energy text-white font-orbitron text-[11px] tracking-[0.2em] uppercase px-5 py-3 rounded-md transition-transform duration-300 hover:scale-[1.04]"
          >
            Enter InsiderLife
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-insiderDark/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="font-orbitron text-sm tracking-[0.2em] uppercase text-white/80"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    goToHash(item.hash!);
                  }}
                  className="text-left font-orbitron text-sm tracking-[0.2em] uppercase text-white/80"
                >
                  {item.label}
                </button>
              )
            )}
            <Link
              to="/circle"
              className="mt-2 inline-flex justify-center bg-energy text-white font-orbitron text-xs tracking-[0.2em] uppercase px-5 py-4 rounded-md"
            >
              Enter InsiderLife
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
