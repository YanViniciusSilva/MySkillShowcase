import { environment } from "src/environments/environment";

export interface ProjectsContentModel {
  title: string;
  description: string;
  image: string;
  technologies?: {name: string}[];
  project_url: string;
  project_git_url: string;
  year: number;
  isPrivate: boolean;
  deployed: boolean;
};

const lang = environment.translation;

export const projectsContent:ProjectsContentModel[] = [
  {
    title: `${lang.projects.projects_descriptions.trade_book.title}`,
    description: `
      ${lang.projects.projects_descriptions.trade_book.description}
    `,
    image: 'assets/sections-images/projects-imgs/tradeBook.svg',
    technologies: [
      { name: 'Angular' },
      { name: 'Firebase' }
    ],
    project_url: '',
    project_git_url: 'github.com/YanViniciusSilva/TradeBook',
    year: 2021,
    isPrivate: false,
    deployed: false
  },
  {
    title: `${lang.projects.projects_descriptions.wedding_invite.title}`,
    description: `
      ${lang.projects.projects_descriptions.wedding_invite.description}
    `,
    technologies: [
      { name: 'Angular' },
      { name: 'Firebase' }
    ],
    image: 'assets/sections-images/projects-imgs/invite.svg',
    project_url: 'wedding-inviters-list.firebaseapp.com',
    project_git_url: 'github.com/YanViniciusSilva/Wedding-invite',
    year: 2022,
    isPrivate: false,
    deployed: true
  },
  {
    title: `${lang.projects.projects_descriptions.glampartners.title}`,
    description: `
      ${lang.projects.projects_descriptions.glampartners.description}
    `,
    technologies: [
      { name: 'Angular' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'NestJs' },
      { name: 'Tailwind' },

    ],
    image: 'assets/sections-images/projects-imgs/glampartners.svg',
    project_url: 'glampartner.com.br',
    project_git_url: 'github.com/YanViniciusSilva/MySkillShowcase',
    year: 2022,
    isPrivate: true,
    deployed: true
  },
  {
    title: `${lang.projects.projects_descriptions.pokedex.title}`,
    description: `
      ${lang.projects.projects_descriptions.pokedex.description}
    `,
    technologies: [
      { name: 'Angular' },
      { name: 'Public API' }
    ],
    image: 'assets/sections-images/projects-imgs/pokedex.svg',
    project_url: 'pokedexangularproject.web.app',
    project_git_url: 'github.com/YanViniciusSilva/PokedexAngular',
    year: 2021,
    isPrivate: false,
    deployed: true
  },
  {
    title: `${lang.projects.projects_descriptions.portfolio.title}`,
    description: `
      ${lang.projects.projects_descriptions.portfolio.description}
    `,
    technologies: [
      { name: 'Angular' },
      { name: 'Tailwind' }
    ],
    image: 'assets/sections-images/projects-imgs/portifolio.svg',
    project_url: 'yansilvadev.com.br',
    project_git_url: 'github.com/YanViniciusSilva/MySkillShowcase',
    year: 2023,
    isPrivate: false,
    deployed: true
  }
]
