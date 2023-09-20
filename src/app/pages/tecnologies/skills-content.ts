import { SafeHtml } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

export enum EnumSkillArea {
  back = 'BACKEND',
  front = 'FRONTEND',
  extra = 'EXTRA'
}

export interface SkillContentModel {
  title: string;
  description: SafeHtml;
  image: string;
  monst_used: boolean;
  skill_area: EnumSkillArea;
}

const lang = environment.translation;

export const skillsContent:SkillContentModel[] = [
  // {
  //   title: 'Lógica de programação',
  //   description: `
  //     <p>
  //       ${lang.skill_cards.skills.logic}
  //     </p>
  //   `,
  //   image: 'assets/sections-images/tecnologies-imgs/cards/notebook.svg',
  //   monst_used: false,
  //   skill_area: EnumSkillArea.back
  // },
  {
    title: 'HTML + CSS',
    description: `
      <p>
       ${lang.tech_skills.skill_cards.skills.html_css}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/html_css.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'NestJs Framework',
    description: `
      <p>
      ${lang.tech_skills.skill_cards.skills.nest_js}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/nestjs.svg',
    monst_used: false,
    skill_area: EnumSkillArea.back
  },
  {
    title: 'Angular Framework',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.angular}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/angular.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'Firebase',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.firebase}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/firebase.svg',
    monst_used: false,
    skill_area: EnumSkillArea.extra
  },
  {
    title: 'Java',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.java}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/java.svg',
    monst_used: false,
    skill_area: EnumSkillArea.back
  },
  {
    title: 'JavaScript',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.javascript}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/javascript.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'Node JS',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.node_js}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/node.svg',
    monst_used: false,
    skill_area: EnumSkillArea.back
  },
  {
    title: 'RxJS',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.rxjs}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/rxjs.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'SQL Server',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.sql}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/sql.svg',
    monst_used: false,
    skill_area: EnumSkillArea.extra
  },
  {
    title: 'Typescript',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.typescript}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/typescript.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'Tailwind',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.tailwind}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/tailwind.svg',
    monst_used: false,
    skill_area: EnumSkillArea.front
  },
  {
    title: 'Postgree',
    description: `
      <p>
        ${lang.tech_skills.skill_cards.skills.postgresql}
      </p>
    `,
    image: 'assets/sections-images/tecnologies-imgs/cards/postgree.svg',
    monst_used: false,
    skill_area: EnumSkillArea.extra
  },
];
