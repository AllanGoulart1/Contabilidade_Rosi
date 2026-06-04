import { Users, Zap, Clock, Bell } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const items = [
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente recebe atenção exclusiva e soluções adaptadas à sua realidade e objetivos de negócio.',
  },
  {
    icon: Zap,
    title: 'Tecnologia Avançada',
    desc: 'Usamos as melhores ferramentas e sistemas contábeis para garantir eficiência, segurança e rapidez.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    desc: 'Respostas rápidas e soluções ágeis para que seu negócio nunca fique parado por questões contábeis.',
  },
  {
    icon: Bell,
    title: 'Informação Sempre Atual',
    desc: 'Acompanhamos mudanças na legislação e mantemos você sempre informado sobre novidades tributárias.',
  },
];

export default function Differentials() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section className="section-py" style={{ background: 'var(--surface)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text + grid */}
          <div
            ref={textRef}
            className="flex flex-col gap-10"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase">
                Diferenciais
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mt-2 leading-tight">
                Por que nos
                <span className="text-gradient block">escolher?</span>
              </h2>
              <p className="text-brand-muted mt-4 leading-relaxed">
                Não somos apenas uma contabilidade. Somos parceiros estratégicos
                comprometidos com o crescimento do seu negócio.
              </p>
            </div>

            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {items.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-brand-border bg-brand-surface2 hover:border-gold/30 transition-colors duration-300"
                  style={{
                    opacity: gridVisible ? 1 : 0,
                    transform: gridVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease ${i * 100}ms`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative flex justify-center"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s',
            }}
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-4 rounded-3xl bg-gold/5 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-gold/20 aspect-square gold-glow">
                <img
                  src="/images/Foto_Rosi_3.png"
                  alt="Rosiani Garcia — Contadora especialista"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating credencial */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max bg-brand-surface2 border border-gold/25 rounded-2xl px-6 py-3 shadow-lg text-center">
                <p className="text-gold font-bold text-sm">CRC/SC-025788/O-5</p>
                <p className="text-brand-muted text-xs mt-0.5">Registro profissional ativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
