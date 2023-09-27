export interface ProjectsContentModel {
  title: string;
  description: string;
  image: string;
  project_url: string;
  project_git_url: string;
  year: number;
  isPrivate: boolean;
  deployed: boolean;
};

export const projectsContent:ProjectsContentModel[] = [
  {
    title: 'Troca Livro (TCC)',
    description: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolorum quibusdam fugiat commodi iure aspernatur pariatur,
      mollitia ad a excepturi similique officiis accusamus hic
      impedit illo reprehenderit reiciendis? Fuga, cum expedita?
    `,
    image: 'assets/sections-images/projects-imgs/tradeBook.svg',
    project_url: 'www.pokedex.com',
    project_git_url: 'github.com/YanViniciusSilva/TradeBook',
    year: 2021,
    isPrivate: false,
    deployed: false
  },
  {
    title: 'Convite de casamento',
    description: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolorum quibusdam fugiat commodi iure aspernatur pariatur,
      mollitia ad a excepturi similique officiis accusamus hic
      impedit illo reprehenderit reiciendis? Fuga, cum expedita?
    `,
    image: 'assets/sections-images/projects-imgs/invite.svg',
    project_url: 'wedding-inviters-list.firebaseapp.com',
    project_git_url: 'github.com/YanViniciusSilva/Wedding-invite',
    year: 2022,
    isPrivate: false,
    deployed: true
  },
  {
    title: 'Pokedex',
    description: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolorum quibusdam fugiat commodi iure aspernatur pariatur,
      mollitia ad a excepturi similique officiis accusamus hic
      impedit illo reprehenderit reiciendis? Fuga, cum expedita?
    `,
    image: 'assets/sections-images/projects-imgs/pokedex.svg',
    project_url: 'www.pokedex.com',
    project_git_url: 'github.com/YanViniciusSilva/PokedexAngular',
    year: 2023,
    isPrivate: false,
    deployed: false
  },
  {
    title: 'Portifólio',
    description: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolorum quibusdam fugiat commodi iure aspernatur pariatur,
      mollitia ad a excepturi similique officiis accusamus hic
      impedit illo reprehenderit reiciendis? Fuga, cum expedita?
    `,
    image: 'assets/sections-images/projects-imgs/portifolio.svg',
    project_url: 'yansilvadev.com.br',
    project_git_url: 'github.com/YanViniciusSilva/MySkillShowcase',
    year: 2023,
    isPrivate: false,
    deployed: true
  }
]
