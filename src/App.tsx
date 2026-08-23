import { useState } from 'react';
import { MessageCircle, CheckCircle2, Scissors, Star, Shield, Instagram, X, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DATA = {
  name: "Thauan Araújo",
  profession: "Especialista em Barbearia",
  city: "Alagoinhas",
  whatsapp: "https://wa.me/5575983537742?text=Ol%C3%A1%2C%20quero%20saber%20mais!",
  instagram: "https://www.instagram.com/t10_barber/",
  logo: "https://i.imgur.com/AbGH110.png",
  expert: "https://i.imgur.com/zlRRYCm.png",
  results: [
    "https://i.imgur.com/iAkbiFO.png",
    "https://i.imgur.com/9zQ1X3Z.png",
    "https://i.imgur.com/6aJeOEu.png",
    "https://i.imgur.com/kOla8It.png",
    "https://i.imgur.com/dTIfO32.png",
    "https://i.imgur.com/kFnBy7M.png",
    "https://i.imgur.com/MEHRRh9.png",
    "https://i.imgur.com/2Yjluza.png",
    "https://i.imgur.com/ybhxwT1.png",
    "https://i.imgur.com/faAVFVq.png"
  ]
};

export default function App() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Aviso de Página Indisponível */}
      <div className="w-full bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold tracking-wide uppercase z-50 relative">
        ⚠️ Esta página ainda está em construção e não pode ser usada no momento.
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <img 
              src={lightboxImg} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <header className="relative pt-12 pb-20 px-6 sm:px-8 max-w-lg mx-auto flex flex-col items-center text-center">
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={DATA.logo} 
          alt="Logo" 
          className="w-24 h-auto mb-12 opacity-90" 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full aspect-[4/5] max-w-sm mx-auto mb-10 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
          <img 
            src={DATA.expert} 
            alt={DATA.name} 
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 leading-tight"
        >
          Eu sou <span className="text-amber-500">Thauan Araújo</span>,<br/> {DATA.profession} em {DATA.city}.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-lg mb-10 leading-relaxed"
        >
          Transformo sua imagem com um corte que valoriza seu rosto e seu estilo. Agende sua primeira avaliação gratuita.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <a 
            href={DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-[17px] py-4 px-6 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] active:scale-[0.98]"
          >
            <MessageCircle size={22} />
            Agendar dia e horário para o atendimento
          </a>
          <p className="text-sm text-zinc-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle2 size={16} className="text-amber-500" />
            Resposta rápida • Sem compromisso
          </p>
        </motion.div>
      </header>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 sm:px-8 bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/30 shrink-0">
              <img src={DATA.expert} alt="Thauan" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Muito prazer, sou Thauan.</h2>
              <p className="text-amber-500 text-sm font-medium tracking-wide uppercase mt-0.5">Barbeiro Especialista</p>
            </div>
          </div>
          
          <div className="text-zinc-300 leading-relaxed mb-8 space-y-4">
            <p>
              Minha missão não é apenas cortar cabelo, mas sim encontrar a identidade visual perfeita para você. Acredito que um bom corte é capaz de abrir portas, transmitir seriedade e aumentar sua autoconfiança no dia a dia.
            </p>
            <p>
              Trabalho com um atendimento humanizado, entendendo a sua rotina e o que você deseja transmitir com a sua imagem.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              "Visagismo e Adequação de Imagem",
              "Atendimento Personalizado e sem pressa",
              "Foco absoluto nos detalhes e acabamento",
              "Ambiente preparado para o seu conforto"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-200 font-medium">
                <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6 sm:px-8 max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Resultados que falam por si</h2>
          <p className="text-zinc-400">Clique nas imagens para ampliar. O próximo pode ser você.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          {DATA.results.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setLightboxImg(img)}
              className="relative aspect-square rounded-xl overflow-hidden group bg-zinc-900 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
        <p className="text-xs text-zinc-600 text-center uppercase tracking-widest font-medium">
          Resultados podem variar de pessoa para pessoa.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6 sm:px-8 bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Por que confiar em mim?</h2>
          
          <div className="grid gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Star className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Avaliação Honesta</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Analiso seu tipo de fio e formato de rosto para propor o que realmente funciona para você.</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Shield className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Atendimento Direto</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Sem enrolação. Comunicação clara sobre o que faremos e como manter o visual em casa.</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Scissors className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Foco no Resultado</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Técnica refinada aplicada para garantir um corte duradouro e alinhado ao seu estilo pessoal.</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Diamond className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Exclusividade</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Você não é apenas mais um cliente. Meu atendimento é focado totalmente em você durante o seu horário.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-24 px-6 sm:px-8 max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Pronto para dar um upgrade no visual?</h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Tire suas dúvidas e agende sua primeira consulta gratuita diretamente pelo WhatsApp.
        </p>
        <a 
          href={DATA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-[17px] py-4 px-6 rounded-xl transition-all shadow-lg active:scale-[0.98]"
        >
          <MessageCircle size={22} />
          Conversar sem compromisso
        </a>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 sm:px-8 bg-zinc-900/50 border-y border-zinc-800/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-lg mx-auto relative z-10">
          <h2 className="text-3xl font-semibold text-white mb-16 text-center">Como funciona a primeira consulta</h2>
          
          <div className="relative pl-8 sm:pl-10 space-y-14 before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-zinc-800">
            <div className="relative">
              <div className="absolute -left-[32px] sm:-left-[40px] top-1 w-6 h-6 rounded-full bg-zinc-950 border-[4px] border-amber-500 z-10" />
              <h3 className="text-xl font-semibold text-white mb-3">
                1. WhatsApp
              </h3>
              <p className="text-zinc-400 leading-relaxed">Você me chama no WhatsApp clicando em qualquer botão desta página. A conversa é super tranquila e sem compromisso.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[32px] sm:-left-[40px] top-1 w-6 h-6 rounded-full bg-zinc-950 border-[4px] border-amber-500 z-10" />
              <h3 className="text-xl font-semibold text-white mb-3">
                2. Agendamento
              </h3>
              <p className="text-zinc-400 leading-relaxed">Entendemos brevemente o que você busca e escolhemos o melhor dia e horário para a sua avaliação gratuita.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[32px] sm:-left-[40px] top-1 w-6 h-6 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10" />
              <h3 className="text-xl font-semibold text-white mb-3">
                3. Transformação
              </h3>
              <p className="text-zinc-400 leading-relaxed">Você vem até a barbearia, fazemos a avaliação presencial e executamos o corte perfeito para o seu rosto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 sm:px-8 max-w-lg mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">Não deixe sua imagem para depois.</h2>
        <p className="text-zinc-400 text-lg mb-12">
          Sua identidade visual importa. Agende agora mesmo e garanta o seu horário.
        </p>
        
        <div className="w-full">
          <a 
            href={DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-[17px] py-4 px-6 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] active:scale-[0.98]"
          >
            <MessageCircle size={22} />
            Agendar minha consulta gratuita
          </a>
          <p className="text-sm text-zinc-500 mt-5 font-medium uppercase tracking-widest">
            Conversa sem compromisso
          </p>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 border-t border-zinc-900 bg-zinc-950 text-center">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <img src={DATA.logo} alt="Logo" className="w-20 opacity-50 mb-8 grayscale" />
          <h4 className="text-white font-semibold text-lg">{DATA.name}</h4>
          <p className="text-zinc-500 mb-8">{DATA.profession} em {DATA.city}</p>
          
          <a 
            href={DATA.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <Instagram size={20} />
          </a>
          
          <p className="text-zinc-700 text-sm mt-16">
            &copy; {new Date().getFullYear()} {DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
