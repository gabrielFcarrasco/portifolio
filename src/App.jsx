import './index.css';
import { useEffect } from 'react';
import fotoPortifolio from "./foto-portifolio.png";

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll(".projeto-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div>
      {/* Seção Apresentação */}
      <section className="apresentacao">
        <div className="apresentacao-conteudo">
          <div className="informacoes">
            <h1>Gabriel Carrasco</h1>
            <p>
              Transformo ideias em experiências digitais que encantam, conectam e vendem. Meu objetivo é ajudar pessoas e negócios a se destacarem na internet de forma simples, poderosa e memorável.
            </p>
            <p>
              Quer você seja um profissional de beleza, uma empresa de serviços residenciais ou qualquer negócio que queira se destacar, eu crio soluções digitais que mostram seu trabalho, aumentam sua visibilidade e facilitam o contato com clientes, tornando cada projeto único e impactante.
            </p>
            <div className="contatos">
              <a href="https://www.linkedin.com/in/gabriel-carrasco-52710028b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/5511983916795?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://github.com/gabrielFcarrasco" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:gabrielfscarrasco@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </div>
          <div className="foto-container">
            <img src={fotoPortifolio} alt="Gabriel Carrasco" className="foto" />
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="projetos">
        <h2>Meus Projetos</h2>
        <div className="projetos-container">

          {/* Projeto 1 */}
          <div className="projeto-card">
            <h3>Studio Thifany - Lash Designer</h3>
            <p>
              Um espaço dedicado à beleza que precisava mostrar seus serviços de forma elegante e prática.
            </p>
            <p>
              Criamos uma página que destaca as fotos de trabalhos realizados, tornando fácil para qualquer pessoa visualizar o resultado e agendar via WhatsApp. Mais clientes, menos esforço.
            </p>
            <a href="https://bit.ly/studiothifany-agende-agora" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>

          {/* Projeto 2 */}
          <div className="projeto-card">
            <h3>Fernando Pintura - Pintura Residencial</h3>
            <p>
              Um serviço residencial que precisava simplificar a forma de receber orçamentos.
            </p>
            <p>
              Desenvolvemos uma página clara e objetiva, onde qualquer pessoa pode solicitar orçamento direto pelo WhatsApp. Rápido, simples e eficiente, gerando mais oportunidades de negócio.
            </p>
            <a href="https://bit.ly/orcamento-fernando-pintura" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;