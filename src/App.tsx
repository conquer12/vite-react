function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0B3C8A, #0A5ED7)",
        color: "#fff",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          CT Construtower LTDA
        </h1>
        <p style={{ fontSize: "20px", opacity: 0.9 }}>
          Construindo seus sonhos com qualidade e confiança
        </p>
        <a
          href="https://wa.me/55SEUNUMEROAQUI"
          style={{
            display: "inline-block",
            marginTop: "30px",
            backgroundColor: "#fff",
            color: "#0B3C8A",
            padding: "15px 30px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* SOBRE */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2>Sobre a Empresa</h2>
        <p style={{ fontSize: "17px", lineHeight: 1.6 }}>
          A <strong>CT Construtower LTDA</strong> atua no setor da construção civil,
          oferecendo soluções completas em obras residenciais e comerciais,
          reformas e acabamentos, sempre com qualidade, segurança e compromisso.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ backgroundColor: "#f4f6f8", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Nossos Serviços
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "auto"
        }}>
          {[
            "Construção Residencial",
            "Construção Comercial",
            "Reformas",
            "Acabamento",
            "Pintura",
            "Elétrica e Hidráulica",
            "Serviços Personalizados"
          ].map((servico) => (
            <div key={servico} style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}>
              <h3>{servico}</h3>
              <p>
                Atendimento profissional com equipe qualificada e materiais de
                qualidade.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        backgroundColor: "#0B3C8A",
        color: "#fff",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2>Construa com quem entende</h2>
        <p>Entre em contato agora e solicite seu orçamento</p>
        <a
          href="https://wa.me/55SEUNUMEROAQUI"
          style={{
            display: "inline-block",
            marginTop: "20px",
            backgroundColor: "#fff",
            color: "#0B3C8A",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer style={{
        backgroundColor: "#111",
        color: "#aaa",
        padding: "20px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} CT Construtower LTDA – Todos os direitos reservados
      </footer>

    </div>
  )
}

export default App
