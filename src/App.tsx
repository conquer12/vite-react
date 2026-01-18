import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div>

      {/* HEADER */}
      <header className="header">
        <img src={logo} className="logo" />
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#orcamento">Orçamento</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>CT Construtower LTDA</h1>
        <p>Construção • Regularização • Projetos • Aprovações</p>
        <span>Construindo seus sonhos com qualidade, segurança e legalidade</span>
        <a href="#orcamento" className="btn">Solicitar Orçamento</a>
      </section>

      {/* SOBRE */}
      <section className="section">
        <h2>Sobre a CT Construtower</h2>
        <p>
          A <strong>CT Construtower LTDA</strong> é uma empresa especializada em
          construção civil, oferecendo soluções completas para obras
          residenciais e comerciais, regularização de imóveis, elaboração de
          projetos e aprovações junto aos órgãos competentes.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="section light">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          <div className="service">Construção Residencial</div>
          <div className="service">Construção Comercial</div>
          <div className="service">Reformas e Ampliações</div>
          <div className="service">Acabamentos de Alto Padrão</div>
          <div className="service">Pintura Profissional</div>
          <div className="service">Elétrica e Hidráulica</div>
          <div className="service">Regularização de Imóveis</div>
          <div className="service">Projetos Arquitetônicos</div>
          <div className="service">Aprovações em Prefeituras</div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="section">
        <h2>Obras Realizadas</h2>
        <p>Alguns projetos executados com qualidade e excelência</p>

        <div className="portfolio">
          <div className="obra">Obra Residencial</div>
          <div className="obra">Obra Comercial</div>
          <div className="obra">Reforma</div>
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

            const texto = `Olá, gostaria de um orçamento.
Nome: ${f.nome.value}
Serviço: ${f.servico.value}
Mensagem: ${f.mensagem.value}
WhatsApp: ${f.whatsapp.value}`;

            window.open(
              `https://wa.me/5513997914843?text=${encodeURIComponent(texto)}`
            );
          }}
        >
          <input name="nome" placeholder="Seu nome" required />
          <input name="whatsapp" placeholder="Seu WhatsApp" required />
          <select name="servico">
            <option>Construção</option>
            <option>Reforma</option>
            <option>Regularização de Imóvel</option>
            <option>Projeto / Aprovação</option>
            <option>Outros</option>
          </select>
          <textarea name="mensagem" placeholder="Descreva sua necessidade"></textarea>
          <button>Enviar pelo WhatsApp</button>
        </form>
      </section>

      {/* CONTATO */}
      <footer id="contato" className="footer">
        <p><strong>CT Construtower LTDA</strong></p>
        <p>São Vicente – SP</p>
        <p>WhatsApp: (13) 99791-4843</p>
        <p>Email: ba728632@gmail.com</p>
        <p>Atendimento em todo o Estado de São Paulo</p>
      </footer>

    </div>
  );
}
