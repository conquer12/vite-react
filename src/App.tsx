import "./App.css";

export default function App() {
  return (
    <div>
      {/* TOPO */}
      <header className="hero">
        <h1>CT Construtower LTDA</h1>
        <p>Construção Residencial e Comercial</p>
        <span>Construindo seus sonhos com qualidade e segurança</span>
        <a href="#contato" className="btn">Solicitar Orçamento</a>
      </header>

      {/* SOBRE */}
      <section className="section dark">
        <h2>Sobre a Empresa</h2>
        <p>
          A <strong>CT Construtower LTDA</strong> atua no setor da construção civil,
          oferecendo soluções completas em obras residenciais, comerciais e reformas.
          Trabalhamos com qualidade, segurança, prazo e compromisso,
          atendendo toda a região do Estado de São Paulo.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <h2>Nossos Serviços</h2>
        <ul className="services">
          <li>Construção Residencial</li>
          <li>Construção Comercial</li>
          <li>Reformas em Geral</li>
          <li>Acabamento</li>
          <li>Pintura</li>
          <li>Elétrica e Hidráulica</li>
          <li>Serviços Personalizados</li>
        </ul>
      </section>

      {/* PORTFÓLIO */}
      <section className="section dark">
        <h2>Obras Realizadas</h2>
        <p>
          Confira algumas obras executadas pela CT Construtower LTDA.
          Compromisso, qualidade e acabamento profissional.
        </p>
        <div className="portfolio">
          <div className="obra">Obra 1</div>
          <div className="obra">Obra 2</div>
          <div className="obra">Obra 3</div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <h2>Solicite um Orçamento</h2>
        <form className="form">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="WhatsApp" />
          <input type="text" placeholder="Tipo de serviço" />
          <textarea placeholder="Descreva seu projeto"></textarea>
          <button>Enviar</button>
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <p><strong>CT Construtower LTDA</strong></p>
        <p>São Vicente - SP</p>
        <p>WhatsApp: (13) 99791-4843</p>
        <p>Email: ba728632@gmail.com</p>
        <p>Atendimento em todo o Estado de São Paulo</p>
      </footer>
    </div>
  );
}
