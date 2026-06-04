import { Shield, Award, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const tags = [
  { icon: Award, label: 'CRC/SC-025788/O-5' },
  { icon: Shield, label: 'Especialista Tributária' },
  { icon: MapPin, label: 'Araranguá / SC' },
];

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,97,0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text side */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">
                Contabilidade Profissional
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-extrabold leading-[1.1] mb-4">
                <span className="text-gradient text-4xl sm:text-5xl lg:text-6xl block">
                  Reduza seus
                </span>
                <span className="text-4xl sm:text-5xl lg:text-6xl text-brand-text block">
                  impostos com
                </span>
                <span className="text-4xl sm:text-5xl lg:text-6xl text-brand-text block">
                  segurança
                </span>
              </h1>
              <p className="text-brand-muted text-lg leading-relaxed max-w-lg">
                Assessoria contábil especializada para MEI, micro, pequenas e médias
                empresas. Mais de 15 anos transformando a gestão fiscal de negócios em
                Santa Catarina.
              </p>
            </div>

            {/* Authority tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface2 border border-brand-border text-sm text-brand-text"
                >
                  <Icon size={13} className="text-gold flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold text-base px-7 py-3.5"
              >
                Solicitar Orçamento
              </button>
              <a
                href="https://wa.me/5548984292437"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-7 py-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.506 3.431A10.954 10.954 0 0012.026 0C5.486 0 .183 5.303.183 11.843c0 2.083.543 4.117 1.574 5.923L.129 24l6.352-1.904a11.782 11.782 0 005.545 1.413h.005c6.54 0 11.843-5.303 11.843-11.843 0-3.162-1.223-6.137-3.442-8.381z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image side */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}
          >
            <div className="relative w-full max-w-[440px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 blur-2xl scale-110" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border border-gold/20 aspect-square gold-glow">
                <img
                  src="/images/Foto_Rosi_1.png"
                  alt="Rosiani Garcia — Contadora"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <p className="font-bold text-gold text-xl leading-tight">
                    Rosiani Garcia
                  </p>
                  <p className="text-brand-muted text-xs tracking-widest uppercase mt-1">
                    Contadora · CRC/SC
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
