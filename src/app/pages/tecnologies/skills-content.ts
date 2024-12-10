import { SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

export enum EnumSkillArea {
  back = 'BACKEND',
  front = 'FRONTEND',
  extra = 'EXTRA',
}

export interface SkillContentModel {
  title: string;
  description: SafeHtml;
  image: string;
  most_used: boolean;
  skill_area: EnumSkillArea;
}

const lang = environment.translation;

export const skillsContent: SkillContentModel[] = [
  // {
  //   title: 'Lógica de programação',
  //   description: `
  //     <p>
  //       ${lang.skill_cards.skills.logic}
  //     </p>
  //   `,
  //   image: 'assets/sections-images/tecnologies-imgs/cards/notebook.svg',
  //   most_used: false,
  //   skill_area: EnumSkillArea.back
  // },
  {
    title: 'RxJS',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.rxjs}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/rxjs.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'Tailwind',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.tailwind}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/tailwind.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'HTML + CSS',
    description: `
      <p>
       ${lang.tech_skills.skill_cards.skills.html_css}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/html_css.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'NestJs Framework',
    description: `
      <p>
      ${lang.tech_skills.skill_cards.skills.nest_js}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/nestjs.svg',
    most_used: true,
    skill_area: EnumSkillArea.back,
  },
  {
    title: 'Angular Framework',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.angular}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/angular.svg',
    most_used: true,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'Firebase',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.firebase}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/firebase.svg',
    most_used: false,
    skill_area: EnumSkillArea.extra,
  },
  {
    title: 'Prisma',
    description: `
      <p>
      </p>
      ${lang.tech_skills.skill_cards.skills.prisma}
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/prisma.svg',
    most_used: false,
    skill_area: EnumSkillArea.back,
  },
  {
    title: 'Node JS',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.node_js}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/node.svg',
    most_used: false,
    skill_area: EnumSkillArea.back,
  },
  {
    title: 'Java',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.java}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/java.svg',
    most_used: false,
    skill_area: EnumSkillArea.back,
  },
  {
    title: 'Typescript',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.typescript}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/typescript.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'JavaScript',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.javascript}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/javascript.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'SQL Server',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.sql}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/sql.svg',
    most_used: true,
    skill_area: EnumSkillArea.extra,
  },
  {
    title: 'Postgree',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.postgresql}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/postgree.svg',
    most_used: false,
    skill_area: EnumSkillArea.extra,
  },
  {
    title: 'React Native + Expo',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.react_native}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/react_native.svg',
    most_used: false,
    skill_area: EnumSkillArea.front,
  },
  {
    title: 'MySQL',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.postgresql}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/mysql.svg',
    most_used: false,
    skill_area: EnumSkillArea.extra,
  },
];
