import todoImg from '../assets/todo.svg'
import landingImg from '../assets/landing.svg'
import portfolioImg from '../assets/portfolio.svg'

const projects = [
  {
    id: 'p1',
    title: 'Mini witter',
    short: 'Uma rede social simples, usando react',
    description: 'Aplicativo de carregamento e publicação de fotos. Desenvolvido como exercício para consolidar conceitos de estado e props no React.',
    image: todoImg,
  },
  {
    id: 'p2',
    title: 'Landing Page',
    short: 'Página responsiva',
    description: 'Landing page responsiva para apresentar um produto, com seções de features, preços e contato. Projeto focado em layout e responsividade.',
    image: landingImg,
  },
  {
    id: 'p3',
    title: 'Portfolio',
    short: 'Meu portfólio',
    description: 'Site pessoal com apresentação, lista de projetos e formulário de contato (este projeto).',
    image: portfolioImg,
  },
]

export default projects
