import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  LayoutDashboard,
  BarChart3,
  Users,
  ChevronUp,
  Sparkles,
  Menu,
  X,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: <Zap className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Performance Extrema",
    desc: "Infraestrutura otimizada para respostas em milissegundos e escalabilidade global."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Segurança de Ponta",
    desc: "Criptografia end-to-end e conformidade total com LGPD e normas internacionais."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Acesso Global",
    desc: "CDNs distribuídos nos 5 continentes garantindo latência mínima para seus usuários."
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Analytics Avançado",
    desc: "Painéis de controle interativos e dashboards customizáveis em tempo real."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Colaboração Simultânea",
    desc: "Trabalhe em equipe sem conflitos com sincronização instantânea de dados."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" strokeWidth={2} />,
    title: "Inteligência Artificial",
    desc: "Algoritmos preditivos para identificar oportunidades e mitigar riscos proativamente."
  }
];

const TESTIMONIALS = [
  {
    name: "Ricardo Silva",
    role: "CEO na TechFlow",
    quote: "A revolução que nosso negócio precisava. Interface intuitiva e suporte impecável.",
    avatar: "RS"
  },
  {
    name: "Ana Clara",
    role: "CTO na InnovateSoft",
    quote: "Elegância técnica e funcionalidade brutal. Simplesmente o melhor padrão do mercado.",
    avatar: "AC"
  },
  {
    name: "Felipe Mendes",
    role: "Diretor de Operações",
    quote: "Reduzimos custos operacionais em 40% nos primeiros três meses de uso.",
    avatar: "FM"
  }
];

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { name: "description", content: "A plataforma definitiva para gerenciamento empresarial de alta performance." },
      { name: "title", content: "NovaPlataforma | Excelência Digital" }
    ],
    links: []
  })
});

function IndexPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Start dark for premium vibe

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark/light class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass shadow-[0_4px_12px_-3px_rgba(0,0,0,0.1)]" : "py-6 bg-transparent"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Sparkles className="text-white h-5 w-5" strokeWidth={2.5} />
              <div className="absolute inset-0 animate-shimmer rounded-xl" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-foreground">Nova<span className="text-primary">Plataforma</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Recursos", "Clientes", "Preços", "Sobre"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {item}
              </a>
            ))}
            <Button variant="outline" size="sm" onClick={() => setDarkMode(!darkMode)} className="rounded-full border-border/50 hover:bg-accent">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 shadow-glow-primary text-white">
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b border-border"
            >
              <nav className="flex flex-col p-6 gap-4">
                {["Recursos", "Clientes", "Preços", "Sobre"].map((item) => (
                  <a key={item} href="#" className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    {item}
                  </a>
                ))}
                <Button className="w-full mt-2 rounded-full bg-primary">Entrar</Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">Nova Versão 2.0 Disponível</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-8 leading-[1.1]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Gerencie o Futuro <br />
            <span className="text-transparent bg-clip-text bg-gradient-brand">Sem Limites.</span>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A infraestrutura digital definitiva para empresas que buscam excelência. 
            Design premium, performance extrema e segurança blindada.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full px-8 text-base font-semibold bg-primary hover:bg-primary/90 shadow-glow-primary text-white transition-transform active:scale-95 group">
              Iniciar Experimento
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold border-border bg-background/50 hover:bg-accent text-foreground transition-all">
              Ver Demonstração
            </Button>
          </motion.div>

          {/* MOCK UI PREVIEW */}
          <motion.div 
            className="mt-20 relative mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className="glass-card rounded-2xl p-2 md:p-4 border border-white/10 shadow-2xl transform rotate-x-12 perspective-1000">
               <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted flex flex-col relative">
                 {/* Fake App Header */}
                 <div className="h-12 border-b border-border/50 flex items-center px-6 gap-4 bg-background/50">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
                   </div>
                   <div className="h-6 w-64 bg-muted rounded-md ml-4 opacity-50" />
                 </div>
                 {/* Fake App Body - Abstract Dashboard */}
                 <div className="flex-1 p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-3 space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-12 rounded-lg bg-muted/40 flex items-center px-3">
                          <div className="w-4 h-4 rounded-md bg-primary/20 mr-3" />
                          <div className="h-2 w-20 bg-foreground/10 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="col-span-9 space-y-6">
                       <div className="grid grid-cols-3 gap-4">
                         {[1, 2, 3].map(i => (
                           <div key={i} className="h-24 rounded-xl bg-card border border-border shadow-sm p-4 relative overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity" />
                              <div className="h-6 w-12 rounded bg-muted mb-2" />
                              <div className="h-4 w-20 rounded bg-foreground/20" />
                           </div>
                         ))}
                       </div>
                       <div className="h-48 rounded-xl bg-card border border-border shadow-sm p-6 flex items-end gap-2">
                          {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                            <motion.div 
                              key={i} 
                              className="flex-1 bg-primary/20 rounded-t-md hover:bg-primary/40 transition-colors cursor-pointer"
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            />
                          ))}
                       </div>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-8 right-8 bg-card border border-border shadow-xl rounded-xl p-4 flex items-center gap-3 animate-float">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Crescimento Mensal</p>
                      <p className="text-sm font-bold text-foreground">+128%</p>
                    </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/30">
            {[
              { label: "Empresas Ativas", value: "10k+" },
              { label: "Receita Processada", value: "$5B" },
              { label: "Uptime Garantido", value: "99.99%" },
              { label: "Suporte 24/7", value: "Global" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-1"
              >
                <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="recursos" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6 text-foreground">
              Poderoso por baixo do capô.<br />
              <span className="text-primary">Elegante em cada detalhe.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada recurso foi meticulosamente desenhado para eliminar fricções e elevar sua produtividade ao máximo potencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl relative group"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-brand text-white shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-foreground">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="clientes" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Líderes confiam em nós</h2>
             <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-card hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, starI) => (
                    <svg key={starI} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-foreground mb-8 italic text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Como é feita a migração de dados?", a: "Nosso pipeline automatizado garante zero downtime durante a transferência." },
              { q: "Existe plano gratuito para testes?", a: "Sim, oferecemos 14 dias de trial ilimitado para validar todas as features." },
              { q: "Qual nível de suporte oferecem?", a: "Equipes de engenh dedicadas disponíveis 24/7 via canal VIP e Slack." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-xl cursor-pointer group">
                <h4 className="text-lg font-semibold flex items-center justify-between text-foreground group-hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronUp className="h-5 w-5 transition-transform group-hover:rotate-180" />
                </h4>
                <div className="mt-2 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/5" />
         <div className="container mx-auto px-6 text-center relative z-10">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-brand text-white shadow-2xl"
           >
             <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
               Pronto para elevar seu padrão?
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
               Junte-se às empresas que estão redefinindo o mercado com nossa tecnologia premium.
             </p>
             <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl px-8 rounded-full text-lg">
               Criar Conta Premium
             </Button>
           </motion.div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-muted/30 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white">
                  <Sparkles className="h-4 w-4" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold font-display">Nova<span className="text-primary">Plataforma</span></span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Construindo o futuro da gestão empresarial com tecnologia de ponta e design centrado no ser humano.
              </p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-border/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center cursor-pointer transition-all">
                     <Globe className="h-4 w-4" />
                   </div>
                 ))}
              </div>
            </div>
            
            {[
              { title: "Produto", links: ["Recursos", "Integrações", "Roadmap", "Status"] },
              { title: "Empresa", links: ["Sobre Nós", "Carreiras", "Blog", "Imprensa"] },
              { title: "Legal", links: ["Privacidade", "Termos de Uso", "Cookies", "Licenças"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-foreground mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 NovaPlataforma Inc. Todos os direitos reservados.</p>
            <p>Feito com perfeição obsessiva.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Float */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-glow-primary transition-all duration-500 z-40 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}