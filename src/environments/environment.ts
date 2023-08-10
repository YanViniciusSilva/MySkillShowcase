import { languages } from "src/app/languages/languages";

export const environment = {
  production: true,
  translation: languages(localStorage.getItem('language')),
  translateOpt: {pt: 'PT-BR', en: 'EN'},
};
