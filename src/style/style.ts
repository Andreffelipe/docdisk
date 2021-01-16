import chalk from 'chalk';

const { log } = console;

export const orange = (text: string): string => {
  return chalk.hex('#ff9b05')(text);
};

export const purple = (text: string): string => {
  return chalk.hex('#8f34eb')(text);
};

export const blue = (text: string): string => {
  return chalk.hex('#7dfff2')(text);
};

export const green = (text: string): string => {
  return chalk.hex('#00bd16')(text);
};

export const blueBright = (text: string): string => {
  return chalk.hex('#3853ff')(text);
};

export const gray = (text: string): string => {
  return chalk.hex('#969696')(text);
};

export const bgGray = (text: string): string => {
  return chalk.bgGray(text);
};

const meutexto = `
${orange('JAVASCRIPT BÁSICO')}

=> ${blue('Incluindo JavaScript em uma página HTML')}

- Para incluir JavaScript dentro de uma página, você precisa envolvê-lo em ${bgGray(
  '<script>',
)} tags:

    <${green('script')} ${purple('type')} = ${blueBright('"text/javascript"')} >

    </${green('script')}>

- Chame um arquivo JavaScript externo

    <${green('script')} src =${blueBright('"myscript.js"')}>   </${green(
  'script',
)}>

=> ${blue('Incluindo comentários')}

Em JavaScript, você tem duas opções diferentes:

- Comentários de linha única

    ${gray('// meu comentário')}

- Comentários multi-linha

    /*
      ${gray('meu comentário')}
    */
`;
