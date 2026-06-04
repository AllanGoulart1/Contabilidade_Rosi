import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'João Silva',
    role: 'Diretor — Empresa de Tecnologia',
    text: 'A Rosi Contabilidade transformou completamente a gestão fiscal da nossa empresa. Organização impecável e resultados reais. Recomendo sem hesitar para qualquer negócio.',
    stars: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Gerente Financeira — Varejo',
    text: 'Profissionalismo, dedicação e resultados concretos. A equipe sempre atenciosa e oferece as melhores soluções para o negócio, com comunicação clara e transparente.',
    stars: 5,
  },
  {
    name: 'Carlos Oliveira',
    role: 'Proprietário — Indústria',
    text: 'Com o planejamento tributário da Rosi, conseguimos reduzir significativamente nossos impostos mantendo total conformidade legal. Parceira essencial do nosso crescimento.',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, text, stars, delay, isVisible }) {
  return (
    <div
      className="relative flex flex-col gap-5 p-6 rounded-2xl border border-brand-border bg-brand-surface2 hover:border-gold/30 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={40} className="text-gold" />
      </div>

      <Stars count={stars} />

      <p className="text-brand-text text-sm leading-relaxed flex-1 italic">
        "{text}"
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-brand-border">
        <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
          <span className="text-gold font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <p className="text-brand-text font-semibold text-sm leading-tight">{name}</p>
          <p className="text-brand-muted text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="depoimentos" className="section-py" style={{ background: 'var(--bg)' }}>
      <div className="container-custom">
        <div
          ref={ref}
          className="text-center max-w-xl mx-auto mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span className="text-gold text-xs font-bold tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mt-2 mb-3">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Histórias reais de empresas e pessoas que confiam na nossa assessoria
            para crescer com segurança e tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              isVisible={isVisible}
              delay={100 + i * 120}
            />
          ))}
        </div>

        {/* Trust strip */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-brand-border"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease 600ms',
          }}
        >
          <div className="flex items-center gap-2 text-brand-muted text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-gold fill-gold" />
              ))}
            </div>
            <span>5.0 de avaliação média</span>
          </div>
          <div className="w-px h-4 bg-brand-border hidden sm:block" />
          <p className="text-brand-muted text-sm">Mais de 500 clientes satisfeitos</p>
          <div className="w-px h-4 bg-brand-border hidden sm:block" />
          <p className="text-brand-muted text-sm">Atuação em todo o estado de SC</p>
        </div>
      </div>
    </section>
  );
}
