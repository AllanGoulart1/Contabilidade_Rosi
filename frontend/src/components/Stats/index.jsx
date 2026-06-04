import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCounter } from '../../hooks/useCounter';

const stats = [
  { value: 15, suffix: '+', label: 'Anos de Experiência' },
  { value: 500, suffix: '+', label: 'Clientes Atendidos' },
  { value: 100, suffix: '%', label: 'Conformidade Fiscal' },
  { value: 6, suffix: '+', label: 'Serviços Especializados' },
];

function StatItem({ value, suffix, label, isActive, delay }) {
  const count = useCounter(value, 2000, isActive);

  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-brand-muted text-sm font-medium tracking-wide">{label}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gold/[0.03] border-y border-gold/10" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gold/10">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isActive={isVisible}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
