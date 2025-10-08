import '../App.css'
import BlurText from "../../components/BlurText";
import { useState } from 'react';
import { Link } from 'react-router';

const manualsData = [
  {
    id: 1,
    title: 'Ordem de Serviço',
    description: 'Instruções básicas para operação da O.S no Vertis.',
    pdfUrl: '/manuals/Vertis - Ordem de Serviço.pdf',
  },
  {
    id: 2,
    title: 'Integração Ambra',
    description: 'Como funciona e é configurada a integração com a Ambra.',
    pdfUrl: '/manuals/Vertis - Manual Ambra.pdf',
  },
  {
    id: 3,
    title: 'Totem de Atendimento',
    description: 'Procedimentos necessários para a operação do Totem de Atendimento no Vertis.',
    pdfUrl: '/manuals/Vertis - Totem de Atendimento.pdf',
  },
  {
    id: 4,
    title: 'Apoio Interno',
    description: 'Como funciona as solicitações de apoio interno no Vertis.',
    pdfUrl: '/manuals/Vertis - Solicitação por Apoio Interno.pdf',
  },
  {
    id: 5,
    title: 'Integração Veros',
    description: 'Como funciona a integração com o Veros no Vertis.',
    pdfUrl: '/manuals/Vertis - Integração Veros.pdf',
  },
  {
    id: 6,
    title: 'Painel de Chamadas',
    description: 'Como funciona o painel de chamadas no Vertis.',
    pdfUrl: '/manuals/Vertis - Painel de Chamadas.pdf',
  },
  {
    id: 7,
    title: 'Solicitação de Exame via Portal',
    description: 'Como funciona a solicitação de exame via portal no Vertis.',
    pdfUrl: '/manuals/Vertis - Solicitação de Exames.pdf',
  },
];

function ManualsTec() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredManuals = manualsData.filter(manual =>
    manual.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    manual.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='header-container'>
        <div className='header-box-logo'>
          <Link to={'/'}>
          <img src="https://v1.laudosonline.com.br/hom/assets/images/favicon.png" sizes="32x32" type="image/png" />
          </Link>
        </div>
        <div className={`header-box-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link to={'/manuals'}>
              <span>Manuais Técnicos</span>
            </Link>
            <Link to={'/apresentacoes'}>
              <span>Apresentações</span>
            </Link>
          </nav>
        </div>

        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

        <div>
          <input
            type="text"
            className='input-search-manual'
            placeholder="Pesquisar manual..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <section className='manuals-container'>
        <div className='manuals-box-text' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <BlurText
            text="Selecione qual manual deseja visualizar, simples e prático."
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-2x2 text-gradient mb-8"
          />
        </div>

        <div className='manuals-grid'>
          {filteredManuals.map((manual) => (
            <a key={manual.id} href={manual.pdfUrl} target="_blank" rel="noopener noreferrer" className="manual-card-link">
              <div className='manual-card'>
                <div className='manual-card-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10.5 20H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l5 5v2" /><path d="M14 18v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Z" /><path d="M10 12V9" /></svg>
                </div>
                <h3 className='manual-card-title'>{manual.title}</h3>
                <p className='manual-card-description'>{manual.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default ManualsTec;
