import '../App.css'
import BlurText from "../../components/BlurText";
import { Link } from 'react-router';

const manualsData = [
  {
    id: 1,
    title: 'Ordem de Serviço',
    description: 'Apresentação - Ordem de Serviço no Vertis.',
    pdfUrl: '/manuals/Vertis - Apresentação Ordem de Serviço.pdf',
  },
  {
    id: 2,
    title: 'Integração Ambra',
    description: 'Apresentação - Integração com a Ambra.',
    pdfUrl: '/manuals/Vertis - Ambra.pdf',
  },
  {
    id: 3,
    title: 'Totem de Atendimento',
    description: 'Apresentação - Totem de Atendimento do Vertis.',
    pdfUrl: '/manuals/Vertis - Totem.pdf',
  },
];

function ManualsApr() {
  return (
    <>
      <div className='header-container'>
        <div className='header-box-logo'>
          <img src="https://v1.laudosonline.com.br/hom/assets/images/favicon.png" sizes="32x32" type="image/png" />
        </div>
        <div className='header-box-menu'>
          <Link to={'/manuals'}>
          <span>Manuais Técnicos</span>
          </Link>

          <Link to={'/apresentacoes'}>
          <span>Apresentações</span>
          </Link>

        </div>

        <div>
          <button className='btn-search-manual'>Pesquisar</button>
        </div>
      </div>

      <section className='manuals-container'>
        <div className='manuals-box-text' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <BlurText
            text="Selecione qual apresentação deseja visualizar, simples e prático."
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-2x2 text-gradient mb-8"
          />
        </div>

        <div className='manuals-grid'>
          {manualsData.map((manual) => (
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

export default ManualsApr;
