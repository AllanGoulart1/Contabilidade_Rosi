import { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href.replace('#', ''));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-brand-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNav(e, '#inicio')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold/10 rounded-lg border border-gold/20 group-hover:border-gold/40 transition-colors" />
                <BarChart2 size={20} className="text-gold relative z-10" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none text-gold tracking-wide">
                  Rosiani Garcia
                </p>
                <p className="text-[10px] font-medium text-brand-muted tracking-widest uppercase mt-0.5">
                  Contabilidade
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-gold transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo('contato')}
                className="btn-gold text-sm px-5 py-2.5"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gold"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-72 glass border-l border-brand-border flex flex-col pt-20 pb-8 px-6 gap-2 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="py-3 px-4 text-brand-text font-medium hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pt-4 border-t border-brand-border">
            <button
              onClick={() => { setOpen(false); scrollTo('contato'); }}
              className="btn-gold w-full justify-center text-sm"
            >
              Fale Conosco
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
