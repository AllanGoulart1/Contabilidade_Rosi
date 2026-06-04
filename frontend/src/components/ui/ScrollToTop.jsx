import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-5 z-40 w-10 h-10 rounded-xl bg-brand-surface2 border border-gold/25 text-gold flex items-center justify-center hover:bg-gold/15 hover:border-gold/50 transition-all duration-300 shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
