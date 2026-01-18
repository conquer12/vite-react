function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>

      {/* TOPO */}
      <header style={{
        backgroundColor: "#0A3D91",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        <h1>CT Construtower LTDA</h1>
        <p>Construindo seus sonhos</p>
      </header>

      {/* SOBRE */}
      <section style={{ padding: "30px" }}>
        <h2>Sobre a Empresa</h2>
        <p>
          A CT Construtower LTDA atua no setor da construção civil,
          oferecendo soluções completas com qualidade, segurança
          e compromisso para seus clientes.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ backgroundColor: "#f4f6f8", padding: "30px" }}>
        <h2>Nossos Serviços</h2>
        <ul>
          <li>Construção residencial</li>
          <li>Construção comercial</li>
          <li>Reformas em geral</li>
          <li>Acabamento</li>
          <li>Pintura</li>
          <li>Elétrica e Hidráulica</li>
          <li>Outros serviços personalizados</li>
        </ul>
      </section>

      {/* ATENDIMENTO */}
      <section style={{ padding: "30px" }}>
        <h2>Área de Atendimento</h2>
        <p>Atendemos toda a região do Estado de São Paulo.</p>
      </section>

      {/* CONTATO */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <a
          href="https://wa.me/5513997914843"
          target="_blank"
          style={{
            backgroundColor: "#0A3D91",
            color: "#fff",
            padding: "15px 25px",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer style={{
        backgroundColor: "#0A3D91",
        color: "white",
        textAlign: "center",
        padding: "15px"
      }}>
        © {new Date().getFullYear()} CT Construtower LTDA
      </footer>

    </div>
  );
}

export default App;

