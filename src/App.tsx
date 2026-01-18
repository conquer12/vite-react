import "./App.css";

export default function App() {
  return (
    <div>

      {/* TOPO */}
      <header className="hero">
        <h1>CT Construtower LTDA</h1>
        <p>Construção Residencial e Comercial</p>
        <span>Construindo seus sonhos com qualidade e segurança</span>
        <a href="#orcamento" className="btn">Solicitar Orçamento</a>
      </header>

      {/* SOBRE */}
      <section className="section">
        <h2>Sobre a Empresa</h2>
        <p>
          A <strong>CT Construtower LTDA</strong> atua no setor da construção civil,
          oferecendo soluções completas em obras residenciais, comerciais,
          reformas e acabamentos. Trabalhamos com qualidade, segurança,
          compromisso e respeito ao cliente, atendendo todo o Estado de São Paulo.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="section light">
        <h2>Nossos Serviços</h2>
        <ul className="services">
          <li>Construção Residencial</li>
          <li>Construção Comercial</li>
          <li>Reformas em Geral</li>
          <li>Acabamento</li>
          <li>Pintura</li>
          <li>Elétrica e Hidráulica</li>
          <li>Outros Serviços</li>
        </ul>
      </section>

      {/* PORTFÓLIO */}
      <section className="section">
        <h2>Obras Realizadas</h2>
        <p>Alguns de nossos trabalhos executados</p>
        <div className="portfolio">
          <div className="obra">Foto da Obra</div>
          <div className="obra">Foto da Obra</div>
          <div className="obra">Foto da Obra</div>
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" className="section light">
        <h2>Solicite um Orçamento</h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.target as any;

            const texto = `Olá, me chamo ${f.nome.value}.
Serviço: ${f.servico.value}.
Mensagem: ${f.mensagem.value}.
WhatsApp: ${f.whatsapp.value}`;

            window.open(
              `https://wa.me/5513997914843?text=${encodeURIComponent(texto)}`
            );
          }}
        >
          <input name="nome" placeholder="Seu nome" required />
          <input name="whatsapp" placeholder="Seu WhatsApp" required />
          <input name="servico" placeholder="Tipo de serviço" />
          <textarea name="mensagem" placeholder="Descreva sua obra"></textarea>
          <button>Enviar pelo WhatsApp</button>
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <p><strong>CT Construtower LTDA</strong></p>
        <p>São Vicente – SP</p>
        <p>WhatsApp: (13) 99791-4843</p>
        <p>Email: ba728632@gmail.com</p>
        <p>Atendimento em todo o Estado de São Paulo</p>
      </footer>

    </div>
  );
}
