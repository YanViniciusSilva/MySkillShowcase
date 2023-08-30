export interface ProjectsContentModel {
  title: string;
  description: string;
  image: string;
  project_url: string;
  project_git_url: string;
  year: number;
  isPrivate: boolean;
};

export const projectsContent:ProjectsContentModel[] = [
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
    project_git_url: 'https://github.com/YanViniciusSilva/PokedexAngular',
    year: 2021,
    isPrivate: false
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
    project_url: 'https://wedding-inviters-list.firebaseapp.com/',
    project_git_url: 'https://github.com/YanViniciusSilva/Wedding-invite',
    year: 2021,
    isPrivate: false
  }
]
