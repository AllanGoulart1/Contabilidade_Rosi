import {
  Building2,
  BookOpen,
  FileText,
  FileX,
  CreditCard,
  Receipt,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: Building2,
    title: 'Abertura e Baixa de Empresas',
    desc: 'Assistência completa na constituição e encerramento de empresas, do planejamento à entrega dos documentos oficiais.',
  },
  {
    icon: BookOpen,
    title: 'Assessoria Contábil Empresarial',
    desc: 'Gestão contábil completa com escrituração fiscal e financeira em conformidade com as normas vigentes.',
  },
  {
    icon: FileText,
    title: 'Contratos (PJ e PF)',
    desc: 'Elaboração e análise de contratos para pessoa jurídica e física, garantindo segurança e validade legal.',
  },
  {
    icon: FileX,
    title: 'Distratos (PJ e PF)',
    desc: 'Rescisão contratual para pessoa jurídica e física, com orientação completa sobre direitos e obrigações.',
  },
  {
    icon: CreditCard,
    title: 'Regularização de CNPJ e CPF',
    desc: 'Normalização junto à Receita Federal para regularizar pendências de CNPJ e CPF com agilidade.',
  },
  {
    icon: Receipt,
    title: 'Declaração de IR Pessoa Física',
    desc: 'Elaboração e entrega da declaração de Imposto de Renda PF de forma correta, segura e dentro do prazo.',
  },
];

function ServiceCard({ icon: Icon, title, desc, delay, isVisible }) {
  return (
    <div
      className="group flex flex-col gap-4 p-6 rounded-2xl border border-brand-border bg-brand-surface2 hover:border-gold/40 hover:bg-brand-surface3 transition-all duration-300 cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
    >
      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 group-hover:border-gold/35 group-hover:scale-110 transition-all duration-300">
        <Icon size={22} className="text-gold" />
      </div>
      <div>
        <h3 className="text-brand-text font-semibold text-base mb-2 group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="servicos" className="section-py" style={{ background: 'var(--bg)' }}>
      <div className="container-custom">
        {/* Section header */}
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
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mt-2 mb-3">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Soluções contábeis completas pensadas para simplificar sua vida
            fiscal e fazer seu negócio crescer com segurança.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              isVisible={isVisible}
              delay={80 + i * 80}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 p-6 rounded-2xl border border-gold/15 bg-gold/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease 700ms',
          }}
        >
          <div>
            <p className="font-semibold text-brand-text">
              Não encontrou o serviço que precisa?
            </p>
            <p className="text-brand-muted text-sm">
              Entre em contato e descubra como podemos ajudar.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold flex-shrink-0"
          >
            Consultar Gratuitamente
          </button>
        </div>
      </div>
    </section>
  );
}
