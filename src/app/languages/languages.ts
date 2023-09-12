import * as portuguese from './portuguese-br.json';
import * as english from './english.json';



export const languages = (lang: string) => {
  switch (lang) {
    case 'EN':
      return english
    case 'PT-BR':
      return portuguese;
    default:
      return portuguese;
  }
}
