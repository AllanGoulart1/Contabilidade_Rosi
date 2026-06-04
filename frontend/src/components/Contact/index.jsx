import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Clock, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const info = [
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    lines: ['Segunda a Sexta: 09h — 18h', 'Sáb. e Dom.: Fechado'],
  },
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. Sete de Setembro, 1900', 'Sala 8, Centro — Araranguá/SC'],
  },
  {
    icon: Phone,
    title: 'Telefone & WhatsApp',
    lines: [
      <a key="tel" href="tel:+554835220611" className="hover:text-gold transition-colors">(48) 3522-0611</a>,
      <a key="wa" href="https://wa.me/5548984292437" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">(48) 9 8429-2437</a>,
    ],
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setStatus('loading');
    const telefone = data.telefone ? `\nTelefone: ${data.telefone}` : '';
    const text = `Olá Rosiani! Vim pelo site e gostaria de um atendimento.\n\n*Nome:* ${data.nome}\n*Email:* ${data.email}${telefone}\n\n*Mensagem:*\n${data.mensagem}`;
    const whatsappUrl = `https://wa.me/5548984292437?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
    reset();
    setTimeout(() => setStatus(null), 6000);
  }

  const inputClass = (err) =>
    `w-full bg-brand-surface2 border ${err ? 'border-red-500/60' : 'border-brand-border'} rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-200`;

  return (
    <section id="contato" className="section-py" style={{ background: 'var(--surface)' }}>
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
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mt-2 mb-3">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Preencha o formulário e entraremos em contato via WhatsApp. Consulta
            inicial gratuita e sem compromisso.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease 0.15s',
          }}
        >
          {/* Form */}
          <div className="lg:col-span-3 p-8 rounded-2xl border border-brand-border bg-brand-surface2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gold tracking-wide">
                    Nome Completo *
                  </label>
                  <input
                    {...register('nome', { required: true })}
                    placeholder="Seu nome"
                    className={inputClass(errors.nome)}
                  />
                  {errors.nome && (
                    <span className="text-red-400 text-xs">Campo obrigatório</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gold tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    placeholder="seu@email.com"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs">Email inválido</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gold tracking-wide">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  {...register('telefone')}
                  placeholder="(48) 99999-9999"
                  className={inputClass(false)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gold tracking-wide">
                  Mensagem *
                </label>
                <textarea
                  {...register('mensagem', { required: true })}
                  placeholder="Conte como podemos ajudar seu negócio..."
                  rows={5}
                  className={`${inputClass(errors.mensagem)} resize-none`}
                />
                {errors.mensagem && (
                  <span className="text-red-400 text-xs">Campo obrigatório</span>
                )}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <CheckCircle2 size={18} className="flex-shrink-0" />
                  Redirecionando para o WhatsApp… Obrigado pelo contato!
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  Erro ao enviar. Tente via WhatsApp diretamente.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-brand-border bg-brand-surface2 hover:border-gold/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-gold font-semibold text-sm mb-1.5">{title}</h4>
                  {lines.map((line, i) => (
                    <p key={i} className="text-brand-muted text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp direct CTA */}
            <a
              href="https://wa.me/5548984292437"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-green-500/25 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 text-green-400 font-semibold text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.506 3.431A10.954 10.954 0 0012.026 0C5.486 0 .183 5.303.183 11.843c0 2.083.543 4.117 1.574 5.923L.129 24l6.352-1.904a11.782 11.782 0 005.545 1.413h.005c6.54 0 11.843-5.303 11.843-11.843 0-3.162-1.223-6.137-3.442-8.381z" />
              </svg>
              Falar direto no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
