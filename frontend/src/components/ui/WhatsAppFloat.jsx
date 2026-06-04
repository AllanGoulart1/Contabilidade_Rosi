import { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="bg-brand-surface2 border border-brand-border rounded-2xl p-4 shadow-xl w-64 animate-pulse-glow">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-brand-text font-semibold text-sm">Rosiani Garcia</p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-brand-muted hover:text-brand-text transition-colors"
            >
              <X size={15} />
            </button>
          </div>
          <p className="text-brand-muted text-xs leading-relaxed mb-4">
            Olá! Precisa de ajuda com contabilidade? Clique para conversar agora. 👋
          </p>
          <a
            href="https://wa.me/5548984292437?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-colors duration-200"
            onClick={() => setExpanded(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.506 3.431A10.954 10.954 0 0012.026 0C5.486 0 .183 5.303.183 11.843c0 2.083.543 4.117 1.574 5.923L.129 24l6.352-1.904a11.782 11.782 0 005.545 1.413h.005c6.54 0 11.843-5.303 11.843-11.843 0-3.162-1.223-6.137-3.442-8.381z" />
            </svg>
            Iniciar conversa
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Contato via WhatsApp"
        className="w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-xl shadow-green-900/30 transition-all duration-300 hover:scale-105 animate-float"
      >
        {expanded ? (
          <X size={22} className="text-white" />
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20.506 3.431A10.954 10.954 0 0012.026 0C5.486 0 .183 5.303.183 11.843c0 2.083.543 4.117 1.574 5.923L.129 24l6.352-1.904a11.782 11.782 0 005.545 1.413h.005c6.54 0 11.843-5.303 11.843-11.843 0-3.162-1.223-6.137-3.442-8.381z" />
          </svg>
        )}
      </button>
    </div>
  );
}
