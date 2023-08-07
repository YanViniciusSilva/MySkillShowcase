import * as portuguese from './portuguese-br.json';
import * as english from './english.json';



export const languages = (isPortuguese: boolean) => {
  const language = isPortuguese ? portuguese : english;

  return language;
}
