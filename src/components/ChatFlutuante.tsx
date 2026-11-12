import { useState } from "react";
import "./ChatFlutuante.css";

const sugestoes = [
  ["☎", "Atendente"],
  ["🛒", "Comprar"],
  ["♙", "Criar conta"],
  ["▣", "Vender"],
  ["◈", "Meu pedido"],
  ["↶", "Devolução"],
  ["▤", "Pagamento"],
  ["⌖", "Endereço"],
  ["♙", "Login"],
];

export default function ChatFlutuante() {
  const [aberto, setAberto] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState<string[]>([]);

  const enviar = (event: React.FormEvent) => {
    event.preventDefault();
    const texto = mensagem.trim();
    if (!texto) return;
    setMensagens((atuais) => [...atuais, texto]);
    setMensagem("");
  };

  const escolherSugestao = (texto: string) => setMensagem(texto);

  return (
    <div className={`chat-widget ${aberto ? "is-open" : "is-closed"}`}>
      {!aberto && (
        <button className="chat-launcher" onClick={() => setAberto(true)} aria-label="Abrir chat">
          <span>▰</span>
        </button>
      )}
      {aberto && (
        <section className="chat-window" aria-label="Chat de atendimento">
          <header className="chat-header">
            <img src="https://project--98ca8037-882c-4cdf-9ed6-99ba5eaa409e-dev.lovable.app/api/public/ext-asset?id=4071cc67-cf3a-48e9-9580-3489a0c2ccff" alt="Assistente do atendimento" />
            <div><strong>MercalA</strong><span>Assistente de MercalA</span></div>
            <button className="chat-more" aria-label="Mais opções">⋮</button>
            <button className="chat-close" onClick={() => setAberto(false)} aria-label="Fechar chat">×</button>
          </header>
          <div className="chat-content">
            <div className="chat-greeting">Olá! 👋 Como posso ajudar?</div>
            {mensagens.map((item, index) => <div className="chat-message" key={`${item}-${index}`}>{item}</div>)}
            <span className="chat-label">SUGESTÕES</span>
            <div className="chat-suggestions">
              {sugestoes.map(([icone, texto]) => (
                <button key={texto} onClick={() => escolherSugestao(texto)}><b>{icone}</b>{texto}</button>
              ))}
            </div>
          </div>
          <form className="chat-form" onSubmit={enviar}>
            <input value={mensagem} onChange={(event) => setMensagem(event.target.value)} placeholder="Digite sua dúvida..." aria-label="Digite sua dúvida" />
            <button className="search-button" type="button" onClick={() => setMensagem("")} aria-label="Limpar mensagem">⌕</button>
            <button className="send-button" type="submit" aria-label="Enviar mensagem">➤</button>
          </form>
        </section>
      )}
    </div>
  );
}
