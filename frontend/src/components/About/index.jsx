import { Star, ShieldCheck, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const highlights = [
  {
    icon: Star,
    title: 'Profissionalismo',
    desc: 'Equipe sempre atualizada com as últimas mudanças na legislação tributária.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança',
    desc: 'Centenas de clientes satisfeitos em toda Santa Catarina.',
  },
  {
    icon: Mail,
    title: 'Transparência',
    desc: 'Comunicação clara, relatórios detalhados e total acesso às informações.',
  },
];

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.1);
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation(0.1);

  return (
    <section id="sobre" className="section-py" style={{ background: 'var(--surface)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div
            ref={imgRef}
            className="relative flex justify-center order-last lg:order-first"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-4 rounded-3xl bg-gold/5 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-gold/20 aspect-square gold-glow">
                <img
                  src="/images/Foto_Rosi_2.png"
                  alt="Rosiani Garcia — Especialista Contábil"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decoration card */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-brand-surface2 border border-gold/25 rounded-2xl p-4 shadow-lg text-center min-w-[100px]">
                <p className="text-gold font-bold text-2xl leading-none">CRC</p>
                <p className="text-brand-muted text-[10px] mt-1 leading-tight">SC-025788<br />O-5</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="flex flex-col gap-6"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase">
                Sobre Nós
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mt-2 leading-tight">
                Mais de 15 anos cuidando
                <span className="text-gradient block">do seu negócio</span>
              </h2>
            </div>

            <p className="text-brand-muted leading-relaxed">
              Especializada em soluções contábeis para micro, pequenas e médias empresas,
              a Rosiani Garcia Contabilidade é registrada no CRC/SC e oferece atendimento
              personalizado com foco em segurança fiscal, conformidade legal e orientação
              estratégica.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Com atuação em todo o estado de Santa Catarina, nossa missão é simplificar
              a gestão tributária do seu negócio, reduzir custos fiscais dentro da
              legalidade e garantir que sua empresa cresça com tranquilidade.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-4 rounded-xl border border-brand-border bg-brand-surface2 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
