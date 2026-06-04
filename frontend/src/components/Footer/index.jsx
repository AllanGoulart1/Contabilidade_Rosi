import { BarChart2, Instagram, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

function handleNav(e, href) {
  e.preventDefault();
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border" style={{ background: '#080808' }}>
      <div className="container-custom" style={{ paddingTop: '4rem', paddingBottom: '4rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center">
                <BarChart2 size={18} className="text-gold" />
              </div>
              <div>
                <p className="font-bold text-sm text-gold leading-none">Rosiani Garcia</p>
                <p className="text-[10px] text-brand-muted tracking-widest uppercase mt-0.5">
                  Contabilidade
                </p>
              </div>
            </div>
            <p className="text-brand-muted text-base leading-relaxed max-w-xs">
              Soluções contábeis especializadas para MEI, micro, pequenas e médias empresas.
              Parceria estratégica para o crescimento do seu negócio.
            </p>
            <div className="flex flex-col gap-1.5">
              <span className="text-brand-muted text-sm">CRC/SC-025788/O-5</span>
              <span className="text-brand-muted text-sm">15+ anos de experiência</span>
              <span className="text-brand-muted text-sm">Atuação em todo o estado de SC</span>
            </div>
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com/rosianigarciacontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5548984292437"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gold text-sm tracking-wide">Links Rápidos</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-brand-muted text-base hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gold text-sm tracking-wide">Contato</h4>
            <div className="flex flex-col gap-2.5 text-base text-brand-muted">
              <a href="tel:+554835220611" className="hover:text-gold transition-colors">
                (48) 3522-0611
              </a>
              <a
                href="https://wa.me/5548984292437"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                (48) 9 8429-2437
              </a>
              <p>Av. Sete de Setembro, 1900</p>
              <p>Sala 8, Centro — Araranguá/SC</p>
              <p className="pt-1">Seg–Sex: 09h–18h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
          <p className="text-brand-muted text-sm text-center sm:text-left">
            © {year} Rosiani Garcia Contabilidade · CRC/SC-025788/O-5 · Todos os direitos reservados.
          </p>
          <a
            href="https://www.instagram.com/placeon.oficial?igsh=bjRkZzN2d2lpZTYw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted text-sm hover:text-gold transition-colors duration-200"
          >
            Desenvolvido por Place On
          </a>
        </div>
      </div>
    </footer>
  );
}
