import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="topbar">
        <div className="container">
          <img src={logo} className="logo" />
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#orcamento" className="nav-btn">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-premium">
        <div className="hero-content">
          <h1>CT Construtower LTDA</h1>
          <p>
            Construção • Regularização de Imóveis • Projetos • Aprovações
          </p>
          <span>
            Soluções completas em construção civil com alto padrão de qualidade
          </span>
          <a href="#orcamento" className="cta">
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section">
        <div className="container narrow">
          <h2>Excelência em Construção Civil</h2>
          <p>
            A <strong>CT Construtower LTDA</strong> atua com foco em qualidade,
            legalidade e segurança, oferecendo serviços completos de construção
            residencial e comercial, regularização de imóveis, projetos técnicos
            e aprovações junto aos órgãos competentes em todo o Estado de São Paulo.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="section soft">
        <div className="container">
          <h2>Nossos Serviços</h2>

          <div className="services-premium">
            {[
              "Construção Residencial",
              "Construção Comercial",
              "Reformas e Ampliações",
              "Acabamentos de Alto Padrão",
              "Pintura Profissional",
              "Elétrica e Hidráulica",
              "Regularização de Imóveis",
              "Projetos Arquitetônicos",
              "Aprovações Legais"
            ].map((s) => (
              <div className="service-card" key={s}>
                <h3>{s}</h3>
                <p>
                  Atendimento técnico especializado com qualidade e compromisso.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2>Obras Realizadas</h2>
          <p className="subtitle">
            Projetos executados com excelência e alto padrão construtivo
          </p>

          <div className="portfolio-grid">
            <div className="obra-premium">Residencial</div>
            <div className="obra-premium">Comercial</div>
            <div className="obra-premium">Reforma</div>
          </div>
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" className="section soft">
        <div className="container narrow">
          <h2>Solicite um Orçamento</h2>

          <form
            className="form-premium"
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
            <input name="nome" placeholder="Nome completo" required />
            <input name="whatsapp" placeholder="WhatsApp" required />
            <select name="servico">
              <option>Construção</option>
              <option>Reforma</option>
              <option>Regularização de Imóvel</option>
              <option>Projetos / Aprovações</option>
              <option>Outros</option>
            </select>
            <textarea placeholder="Descreva seu projeto"></textarea>
            <button>Enviar Orçamento</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-premium">
        <p><strong>CT Construtower LTDA</strong></p>
        <p>São Vicente – SP | Atendimento em todo o Estado de São Paulo</p>
        <p>WhatsApp: (13) 99791-4843 | Email: ba728632@gmail.com</p>
      </footer>

    </div>
  );
}
