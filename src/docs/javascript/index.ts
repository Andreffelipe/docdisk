/* eslint-disable no-irregular-whitespace */
import {
  orange,
  blue,
  bgGray,
  green,
  purple,
  blueBright,
  gray,
} from '../../style/style';

const documentationJS = {
  basico: {
    title: `${orange('JAVASCRIPT BÁSICO')}`,
    content: `
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

=> ${blue('Declarando variáveis')}

   existem tem três possibilidades diferentes para declarar uma variável em JavaScript:

   ${green('var')}
    - Ele pode ser reatribuído, mas apenas acessado dentro de uma função.Variáveis ​​definidas com var movem para o topo quando o código é executado.
   ${green('const')}
    - Não podem ser reatribuídos e não podem ser acessados ​​antes que apareçam no código.
   ${green('let')}
    - Semelhante a const, a  let variável pode ser reatribuída, mas não redeclarada.
`,
  },
  td: {
    title: `${orange('Tipos de dados')}`,
    content: `
As variáveis ​​podem conter diferentes tipos de valores e tipos de dados.Você usa = para atribuí- los:

- Números
    var age = 23

- Texto(strings)
    var a = "init"

- Operações
    var b = 1 + 2 + 3

- undefined para valores não atribuídos -
    var person = undefined

- Declarações verdadeiras ou falsas
    var c = true

- null para valores desconhecidos
    var x = null

- Objetos
    var name = { firstName: "John", lastName: "Doe" }

- Arrays
    var a = ["Gustavo", 3, false]

Observe que as variáveis ​​diferenciam maiúsculas de minúsculas.Isso significa lastname e lastName será tratado como duas variáveis ​​diferentes.
      `,
  },
  objetos: {
    title: 'Objetos',
    content: `
Ele é usado para armazenar várias coleções com chave e entidades mais complexas.

var person = {
    primeiroNome: "John",
    lastName: "Doe",
    idade: 20,
    nacionalidade: "alemã"
  } ;

 Métodos Objetos

- Object.assign()
 Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.

- Object.create()
 Cria um novo objeto com o objeto e as propriedades do protótipo especificado.

- Object.defineProperty()
 Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto.

- Object.defineProperties()
 Adiciona as propriedades nomeadas descritas pelos descritores fornecidos a um objeto.

- Object.entries()
 Retorna uma matriz contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto.

- Object.freeze()
 Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.

- Object.fromEntries()
 Retorna um novo objeto de um iterável de pares de valor-chave (reverso à Object.entries).

- Object.getOwnPropertyDescriptor()
 Retorna um descritor de propriedade para uma propriedade nomeada em um objeto.

- Object.getOwnPropertyDescriptors()
 Retorna um objeto contendo todos os descritores de propriedade para um objeto.

-- Object.getOwnPropertyNames()
 Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis ​​e não enumeráveis ​​do próprio objeto fornecido.

- Object.getOwnPropertySymbols()
 Retorna uma matriz de todas as propriedades de símbolo encontradas diretamente sobre um determinado objeto.

-  Object.getPrototypeOf()
 Retorna o protótipo do objeto especificado.

- Object.is()
 Compara se dois valores são o mesmo valor. Equivale a todos os valores de NaN (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).

- Object.isExtensible()
 Determina se a extensão de um objeto é permitida.

- Object.isFrozen()
 Determina se um objeto foi congelado.

- Object.isSealed()
 Determina se um objeto está selado.

- Object.keys()
 Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.

- Object.preventExtensions()
 Impede qualquer extensão de um objeto.

- Object.seal()
 Impede que outro código exclua propriedades de um objeto.

- Object.setPrototypeOf()
 Define o protótipo (isto é, a propriedade interna [[Prototype]]).

- Object.values()
 Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.
`,
  },
  array: {
    title: 'matrizes',
    content: `

Arrays são usados ​​para armazenar vários valores em uma única variável.

var fruta = [
    "Banana",
    "Maçã",
    "Pêra"
  ] ;

Agora você tem uma matriz chamada fruit que contém três itens que você pode usar para operações futuras.

Métodos Array
Depois de criar matrizes, há algumas coisas que você pode fazer com elas:

- concat()
 Junte vários arrays em um.

- indexOf()
 Retorna a primeira posição na qual um determinado elemento aparece em uma matriz.

- join()
 Combine elementos de uma matriz em uma única string e retorne a string.

- lastIndexOf()
 Dá a última posição em que um determinado elemento aparece em uma matriz.

- pop()
 Remove o último elemento de uma matriz.

- push()
 Adicione um novo elemento no final.

- reverse()
 Classifique os elementos em ordem decrescente.

- shift()
 Remova o primeiro elemento de uma matriz.

- slice()
 Puxa uma cópia de uma parte de uma matriz para uma nova matriz.

- sort()
 Classifica os elementos em ordem alfabética.

- splice()
 Adiciona elementos de uma forma e posição especificadas.

- toString()
 Converte elementos em strings.


- unshift()
 Adiciona um novo elemento ao início.

- valueOf()
 Retorna o valor primitivo do objeto especificado.
   `,
  },
  funcoes: {
    title: 'Funções',
    content: `
As funções JavaScript são blocos de código que executam uma determinada tarefa. Uma função básica é parecida com esta:
nome da função ( parâmetro1, parâmetro2, parâmetro3 ) {
    // o que a função faz
  }
Como você pode ver, consiste no function palavra chave mais um nome. Os parâmetros da função estão entre colchetes e você tem colchetes ao redor do que a função executa. Você pode criar o seu próprio, mas para tornar sua vida mais fácil - também há uma série de funções padrão.
  `,
  },
  sd: {
    title: 'Saída de dados',
    content: `
Uma aplicação comum para funções é a saída de dados. Para a saída, você tem as seguintes opções:

- alert()
 Dados de saída em uma caixa de alerta na janela do navegador
- confirm()
 Abre uma caixa de diálogo sim / não e retorna verdadeiro / falso dependendo do clique do usuário
- console.log()
 Grava informações no console do navegador, bom para fins de depuração
- document.write()
 Escreva diretamente no documento HTML
- prompt()
 Cria um diálogo para a entrada do usuário`,
  },
  fg: {
    title: 'Funções Globais',
    content: `
Funções globais são funções integradas a cada navegador capaz de executar JavaScript.

- decodeURI()
 Decodifica um Uniform Resource Identifier (URI) criado por encodeURIou semelhante.

- decodeURIComponent()
 Decodifica um componente URI.

- encodeURI()
 Codifica um URI em UTF-8.

- encodeURIComponent()
 O mesmo, mas para componentes URI.

- eval()
 Avalia o código JavaScript representado como uma string.

- isFinite()
 Determina se um valor passado é um número finito.

- isNaN()
 Determina se um valor é NaN ou não.

- Number()
 Retorna um número convertido de seu argumento.

- parseFloat()
 Analisa um argumento e retorna um número de ponto flutuante.

- parseInt()
 Analisa seu argumento e retorna um inteiro
 `,
  },
  lf: {
    title: 'Loops de JavaScript e Fluxo de controle',
    content: `
    Os loops fazem parte da maioria das linguagens de programação. Eles permitem que você execute blocos de código desejado de vezes com valores diferentes:

for - A maneira mais comum de criar um loop em JavaScript
variações
for ( antes do loop; condição para o loop; executar após o loop ) {
    // o que fazer durante o loop
  }

for (variavel of iteravel) {
  declaração
}

for (variavel in objeto) {
  declaração
}

while - Define as condições sob as quais um loop é executado
var obj = [1,2,3];
var count= 0
while (count < obj.length){
console.log(obj[count]); // escreve no log 1 2 3
count++
};

for each...in
Nunca utiliza um loop assim com arrays. Apenas utilize em objetos.
var obj = {prop1: 1, prop2: 2, prop3: 3};

for each (var item in obj) {
console.log(item); // escreve no log 1 2 3
}

do while - Semelhante ao while loop, mas executa pelo menos uma vez e realiza uma verificação no final para ver se a condição é atendida para executar novamente
var obj = [1,2,3];
var count= 0
do{
console.log(obj[count]); // escreve no log 1 2 3
count++
} while (count < obj.length);

Você tem vários parâmetros para criar loops:
break —Usado para parar e sair do ciclo em certas condições
continue - Pule partes do ciclo se certas condições forem atendidas
If - Else Statements
Esses tipos de declarações são fáceis de entender. Usando-os, você pode definir condições para quando seu código é executado. Se certas condições se aplicarem, algo é feito, se não - algo mais é executado.

Fluxo de controle

Use a instrução if para executar uma instrução se uma condição lógica for verdadeira.
Use a cláusula opcional else para executar uma instrução se a condição for falsa.
if ( condição ) {
    // o que fazer se a condição for atendida
  } else {
    // o que fazer se a condição não for atendida
  }

Uma instrução switch permite que um programa avalie uma expressão e tente corresponder o valor da expressão a um rótulo case.
Se uma correspondência for encontrada, o programa executa a instrução associada.
switch (condição) {
  case 1:
    // o que fazer se a condição 1 for atendida
    break;
  case label_2:
    // o que fazer se a condição 2 for atendida
    break;
  default:
    // o que fazer se as condições não forem atendidas
    break;
}`,
  },
  cf: {
    title: 'Caracteres de Fuga',
    content: `
Strings são o que o JavaScript chama de texto que não executa uma função, mas pode aparecer na tela.

var person = "John Doe" ;
Nesse caso, John Doe é a string.

Personagens de Fuga
Em JavaScript, as strings são marcadas com aspas simples ou duplas. Se quiser usar aspas em uma string, você precisará usar caracteres especiais:

"\\' - Citação única",
" - Citação dupla
Além disso, você também tem caracteres de escape adicionais:

\\ - Barra invertida
\b - Backspace
\f - Form feed
\n - Nova linha
\r - Retorno de carro
\t - Tabulador horizontal
\\v - Tabulador vertical`,
  },
  string: {
    title: 'Métodos de String',
    content: `
Existem muitas maneiras diferentes de trabalhar com strings:

- charAt()
 Retorna um caractere em uma posição especificada dentro de uma string.

- charCodeAt()
 Fornece o Unicode de um caractere nessa posição.

- concat()
 Concatena (junta) duas ou mais strings em uma.

- fromCharCode()
 Retorna uma string criada a partir da sequência especificada de unidades de código UTF-16.

- indexOf()
 Fornece a posição da primeira ocorrência de um texto especificado dentro de uma string.

- lastIndexOf()
 O mesmo que,  indexOf()mas com a última ocorrência, procurando para trás.

- match()
 Recupera as correspondências de uma string em relação a um padrão de pesquisa.

- replace()
 Encontre e substitua o texto especificado em uma string.

- search()
 Executa uma pesquisa por um texto correspondente e retorna sua posição.

- slice()
 Extrai uma seção de uma string e a retorna como uma nova string.

- split()
 Divide um objeto de string em uma matriz de strings em uma posição especificada.

- substr()
 Semelhante a, slice()mas extrai uma substring dependendo de um número especificado de caracteres.

- substring()
 Também semelhante a, slice()mas não pode aceitar índices negativos.

- toLowerCase()
 Converter strings para minúsculas.

- toUpperCase()
 Converter strings para maiúsculas;

- valueOf()
 Retorna o valor primitivo (que não tem propriedades ou métodos) de um objeto string`,
  },
  er: {
    title: 'Sintaxe de Expressão Regular',
    content: `
Expressões regulares são padrões de pesquisa usados ​​para combinar combinações de caracteres em strings. O padrão de pesquisa pode ser usado para pesquisa de texto e texto para substituir operações.

=> Modificadores de padrão

  e - Avaliar substituição
  i - Executar correspondência que não diferencia maiúsculas de minúsculas
  g - Executar correspondência global
  m - Executar correspondência de várias linhas
  s - Trate as strings como uma única linha
  x - Permitir comentários e espaços em branco no padrão
  U - Padrão desagradável

=> Colchetes

  [abc] - Encontre qualquer um dos caracteres entre os colchetes
  [^abc] - Encontre qualquer caractere que não esteja entre colchetes
  [0-9] - Usado para encontrar qualquer dígito de 0 a 9
  [A-z] - Encontre qualquer caractere de A maiúsculo a z minúsculo
  (a|b|c) - Encontre qualquer uma das alternativas separadas por |

=> Metacaracteres

  . - Encontre um único caractere, exceto nova linha ou terminador de linha
  \\w - personagem de palavra
  \\W - Caráter não verbal
  \\d - um dígito
  \\D - Um caractere sem dígitos
  \\s - caractere de espaço em branco
  \\S - Caractere sem espaço em branco
  \b - Encontre uma correspondência no início / final de uma palavra
  \\B - Uma correspondência que não está no início / fim de uma palavra
  \\0 - personagem NUL
  \n - Um caractere de nova linha
  \f - Caractere de feed de formulário
  \r - Carriage Return Character
  \t - caractere de tabulação
  \\v - Tabulação vertical
  \\xxx - O caractere especificado por um número octal xxx
  \\xdd - Caractere especificado por um número hexadecimal dd
  \\uxxxx - O caractere Unicode especificado por um número hexadecimal XXXX

=> Quantificadores

  n+ - Corresponde a qualquer string que contenha pelo menos um n
  n* - Qualquer string que contenha zero ou mais ocorrências de n
  n? - Uma string que contém zero ou uma ocorrência de n
        "n{X} - String que contém uma sequência de X n's",
        "n{X,Y} - Strings que contêm uma sequência de X a Y n's",
        "n{X,} - Corresponde a qualquer string que contenha uma sequência de pelo menos X n's",
  n$ - Qualquer string com n no final
  ^n - String com n no início
  ?=n - Qualquer string seguida por uma string específica n
  ?!n - String que não é seguida por uma string específica ni`,
  },
  number: {
    title: 'Números e matemática',
    content: `
Em JavaScript, você também pode trabalhar com números, constantes e realizar funções matemáticas.

=> Propriedades do número

  MAX_VALUE - O valor numérico máximo representável em JavaScript
  MIN_VALUE - Menor valor numérico positivo representável em JavaScript
  NaN - O valor “Não é um número”
  NEGATIVE_INFINITY - O valor Infinito negativo
  POSITIVE_INFINITY - Valor infinito positivo

=> Métodos Numéricos

  toExponential() - Retorna a string com um número arredondado escrito como notação exponencial
  toFixed() - Retorna a string de um número com um número especificado de decimais
  toPrecision() - String de um número escrito com um comprimento especificado
  toString() - Retorna um número como uma string
  valueOf() - Retorna um número como um número

=> Propriedades matemáticas

  E - numero de Euler
  LN2 - O logaritmo natural de 2
  LN10 - Logaritmo natural de 10
  LOG2E - Logaritmo de base 2 de E
  LOG10E - Logaritmo de base 10 de E
  PI - O número PI
  SQRT1_2 - Raiz quadrada de 1 / 2
  SQRT2 - A raiz quadrada de 2

=> Métodos Matemáticos

  abs(x) - Retorna o valor absoluto(positivo) de x
  acos(x) - O arco cosseno de x, em radianos
  asin(x) - Arcseno de x, em radianos
  atan(x) - O arco tangente de x como um valor numérico
  atan2(y, x) - Arco tangente do quociente de seus argumentos
  ceil(x) - Valor de x arredondado para o número inteiro mais próximo
  cos(x) - O cosseno de x(x está em radianos)
  exp(x) - Valor de E x
  floor(x) - O valor de x arredondado para o número inteiro mais próximo
  log(x) - O logaritmo natural(base E) de x
  max(x, y, z, ..., n) - Retorna o número com o valor mais alto
  min(x, y, z, ..., n) - O mesmo para o número com o menor valor
  pow(x, y) - X elevado à potência de y
  random() - Retorna um número aleatório entre 0 e 1
  round(x) - O valor de x arredondado para o número inteiro mais próximo
  sin(x) - O seno de x(x está em radianos)
  sqrt(x) - Raiz quadrada de x
  tan(x) - A tangente de um ângulo`,
  },
  datas: {
    title: 'datas',
    content: `
Você também pode trabalhar e modificar datas e horas com JavaScript. Este é o próximo capítulo da folha de dicas do JavaScript.

=> Definição de datas

  Date() - Cria um novo objeto de data com a data e hora atuais
  Date(2017,5,21,3,23,10,0)- Crie um objeto de data personalizado. Os números representam um ano, mês, dia, hora, minutos, segundos, milissegundos. Você pode omitir o que quiser, exceto um ano e um mês.
  Date("2017-06-23") - Declaração de data como uma string
  Extração de valores de data e hora
  getDate() - Obtenha o dia do mês como um número (1-31)
  getDay() - O dia da semana como um número (0-6)
  getFullYear() - Ano como um número de quatro dígitos (aaaa)
  getHours() - Obtenha a hora (0-23)
  getMilliseconds() - O milissegundo (0-999)
  getMinutes() - Obtenha o minuto (0-59)
  getMonth() - Mês como um número (0-11)
  getSeconds() - Obtenha o segundo (0-59)
  getTime() - Obtenha os milissegundos desde 1º de janeiro de 1970
  getUTCDate() - O dia (data) do mês na data especificada de acordo com a hora universal (também disponível para dia, mês, ano inteiro, horas, minutos etc.)
  parse - Analisa uma representação de string de uma data e retorna o número de milissegundos desde 1º de janeiro de 1970
  Definir parte de uma data
  setDate() - Defina o dia como um número (1-31)
  setFullYear() - Define o ano (opcionalmente, mês e dia)
  setHours() - Defina a hora (0-23)
  setMilliseconds() - Definir milissegundos (0-999)
  setMinutes() - Define os minutos (0-59)
  setMonth() - Defina o mês (0-11)
  setSeconds() - Define os segundos (0-59)
  setTime() - Defina a hora (milissegundos desde 1 de janeiro de 1970)
  setUTCDate() - Define o dia do mês para uma data especificada de acordo com a hora universal (também disponível para dia, mês, ano completo, horas, minutos, etc.)
   `,
  },
  dom: {
    title: 'Métodos DOM',
    content: `
Métodos DOM
O DOM é o Document Object Model de de uma página. É o código da estrutura de uma página web. O JavaScript vem com muitas maneiras diferentes de criar e manipular elementos HTML (chamados de nós).

=> Propriedades do nó
attributes - Retorna uma coleção ativa de todos os atributos registrados em um elemento
baseURI - Fornece o URL de base absoluta de um elemento HTML
childNodes - Dá uma coleção de nós filhos de um elemento
firstChild - Retorna o primeiro nó filho de um elemento
lastChild - O último nó filho de um elemento
nextSibling - Fornece o próximo nó no mesmo nível da árvore de nós
nodeName —Retorna o nome de um nó
nodeType - Retorna o tipo de um nó
nodeValue - Define ou retorna o valor de um nó
ownerDocument - O objeto de documento de nível superior para este nó
parentNode - Retorna o nó pai de um elemento
previousSibling - Retorna o nó imediatamente anterior ao atual
textContent - Define ou retorna o conteúdo textual de um nó e seus descendentes

=> Métodos de Nó
appendChild() - Adiciona um novo nó filho a um elemento como o último nó filho
cloneNode() - Clona um elemento HTML
compareDocumentPosition() - Compara a posição do documento de dois elementos
getFeature() - Retorna um objeto que implementa as APIs de um recurso especificado
hasAttributes() - Retorna verdadeiro se um elemento tiver algum atributo, caso contrário, é falso
hasChildNodes() - Retorna verdadeiro se um elemento tiver qualquer nó filho, caso contrário, é falso
insertBefore() - Insere um novo nó filho antes de um nó filho existente especificado
isDefaultNamespace() - Retorna verdadeiro se um namespaceURI especificado for o padrão, caso contrário, é falso
isEqualNode() - Verifica se dois elementos são iguais
isSameNode() - Verifica se dois elementos são o mesmo nó
isSupported() - Retorna verdadeiro se um recurso especificado for compatível com o elemento
lookupNamespaceURI() - Retorna o URI do namespace associado a um determinado nó
lookupPrefix() - Retorna um DOMString contendo o prefixo para um determinado URI de namespace, se presente
normalize() - Une nós de texto adjacentes e remove nós de texto vazios em um elemento
removeChild() - Remove um nó filho de um elemento
replaceChild() - Substitui um nó filho em um elemento

=> Métodos de Elemento
getAttribute() - Retorna o valor de atributo especificado de um nó de elemento
getAttributeNS() - Retorna o valor da string do atributo com o namespace e nome especificados
getAttributeNode() - Obtém o nó de atributo especificado
getAttributeNodeNS() - Retorna o nó de atributo para o atributo com o namespace e nome fornecidos
getElementsByTagName() - Fornece uma coleção de todos os elementos filhos com o nome de tag especificado
getElementsByTagNameNS() - Retorna uma coleção HTMLC de elementos ao vivo com um determinado nome de tag pertencente ao namespace fornecido
hasAttribute() - Retorna verdadeiro se um elemento tiver algum atributo, caso contrário, é falso
hasAttributeNS() - Fornece um valor verdadeiro / falso indicando se o elemento atual em um determinado namespace tem o atributo especificado
removeAttribute() - Remove um atributo especificado de um elemento
removeAttributeNS() - Remove o atributo especificado de um elemento em um determinado namespace
removeAttributeNode() - Retira um nó de atributo especificado e retorna o nó removido
setAttribute() - Define ou altera o atributo especificado para um valor especificado
setAttributeNS() - Adiciona um novo atributo ou altera o valor de um atributo com o namespace e nome fornecidos
setAttributeNode() - Define ou altera o nó de atributo especificado
setAttributeNodeNS() - Adiciona um novo nó de atributo com namespace a um elemento
Trabalhando com o navegador do usuário
Além dos elementos HTML, o JavaScript também pode levar em consideração o navegador do usuário e incorporar suas propriedades ao código.

=> Propriedades da janela
closed - Verifica se uma janela foi fechada ou não e retorna verdadeiro ou falso
defaultStatus - Define ou retorna o texto padrão na barra de status de uma janela
document - Retorna o objeto do documento para a janela
frames- Retorna todos os <iframe>elementos na janela atual
history - Fornece o objeto Histórico para a janela
innerHeight - A altura interna da área de conteúdo de uma janela
innerWidth - A largura interna da área de conteúdo
length- Descubra o número de  <iframe>elementos na janela
location - Retorna o objeto de localização para a janela
name - Define ou retorna o nome de uma janela
navigator - Retorna o objeto Navigator para a janela
opener - Retorna uma referência à janela que criou a janela
outerHeight - A altura externa de uma janela, incluindo barras de ferramentas / barras de rolagem
outerWidth - A largura externa de uma janela, incluindo barras de ferramentas / barras de rolagem
pageXOffset - Número de pixels em que o documento atual foi rolado horizontalmente
pageYOffset - Número de pixels em que o documento foi rolado verticalmente
parent - A janela principal da janela atual
screen - Retorna o objeto Tela para a janela
screenLeft - A coordenada horizontal da janela (em relação à tela)
screenTop - A coordenada vertical da janela
screenX- O mesmo, screenLeftmas necessário para alguns navegadores
screenY- O mesmo, screenTopmas necessário para alguns navegadores
self - Retorna a janela atual
status - Define ou retorna o texto na barra de status de uma janela
top - Retorna a janela superior do navegador

=> Métodos de janela
alert() - Exibe uma caixa de alerta com uma mensagem e um botão OK
blur() - Remove o foco da janela atual
clearInterval() - Limpa um temporizador definido com setInterval()
clearTimeout() - Limpa um temporizador definido com setTimeout()
close() - Fecha a janela atual
confirm()- Exibe uma caixa de diálogo com uma mensagem e um botão OK e Cancelar
focus() - Define o foco para a janela atual
moveBy() - Move uma janela em relação à sua posição atual
moveTo() - Move uma janela para uma posição especificada
open() - Abre uma nova janela do navegador
print() - Imprime o conteúdo da janela atual
prompt() - Exibe uma caixa de diálogo que solicita a entrada do visitante
resizeBy() - redimensiona a janela pelo número especificado de pixels
resizeTo() - redimensiona a janela para uma largura e altura especificadas
scrollBy() - Rola o documento por um número especificado de pixels
scrollTo() - Rola o documento para as coordenadas especificadas
setInterval() - Chama uma função ou avalia uma expressão em intervalos especificados
setTimeout() - Chama uma função ou avalia uma expressão após um intervalo especificado
stop() - Impede o carregamento da janela
Propriedades da tela
availHeight - Retorna a altura da tela (excluindo a barra de tarefas do Windows)
availWidth - Retorna a largura da tela (excluindo a barra de tarefas do Windows)
colorDepth - Retorna a profundidade de bits da paleta de cores para exibir imagens
height - A altura total da tela
pixelDepth - A resolução de cor da tela em bits por pixel
width - A largura total da tela
Eventos JavaScript
Eventos são coisas que podem acontecer com elementos HTML e são executados pelo usuário. A linguagem de programação pode ouvir esses eventos e disparar ações no código. Nenhuma folha de dicas do JavaScript estaria completa sem eles.

=> Mouse
onclick - O evento ocorre quando o usuário clica em um elemento
oncontextmenu - O usuário clica com o botão direito em um elemento para abrir um menu de contexto
ondblclick - O usuário clica duas vezes em um elemento
onmousedown - O usuário pressiona o botão do mouse sobre um elemento
onmouseenter - O ponteiro se move para um elemento
onmouseleave - O ponteiro sai de um elemento
onmousemove - O ponteiro se move enquanto está sobre um elemento
onmouseover - Quando o ponteiro é movido para um elemento ou um de seus filhos
onmouseout - O usuário move o ponteiro do mouse para fora de um elemento ou de um de seus filhos
onmouseup - O usuário libera um botão do mouse enquanto está sobre um elemento

=> Teclado
onkeydown - Quando o usuário está pressionando uma tecla
onkeypress - No momento em que o usuário começa a pressionar uma tecla
onkeyup - O usuário libera uma tecla

=> Quadro, Armação
onabort - O carregamento de uma mídia foi abortado
onbeforeunload - O evento ocorre antes que o documento esteja prestes a ser descarregado
onerror - Ocorre um erro ao carregar um arquivo externo
onhashchange - Houve alterações na parte âncora de um URL
onload - Quando um objeto é carregado
onpagehide - O usuário sai de uma página da web
onpageshow - Quando o usuário navega para uma página da web
onresize - A visualização do documento é redimensionada
onscroll - A barra de rolagem de um elemento está sendo rolada
onunload - O evento ocorre quando uma página é descarregada

=> Formato
onblur - Quando um elemento perde o foco
onchange- O conteúdo de um elemento de formulário muda (para <input>, <select>e <textarea>)
onfocus - Um elemento obtém o foco
onfocusin - Quando um elemento está prestes a obter foco
onfocusout - O elemento está prestes a perder o foco
oninput - Entrada do usuário em um elemento
oninvalid - Um elemento é inválido
onreset - Um formulário é redefinido
onsearch- O usuário escreve algo em um campo de pesquisa (para <input="search">)
onselect- O usuário seleciona algum texto (para <input>e <textarea>)
onsubmit - Um formulário é enviado

=> Arrastar
ondrag - Um elemento é arrastado
ondragend - O usuário terminou de arrastar o elemento
ondragenter - O elemento arrastado entra em um destino de soltar
ondragleave - Um elemento arrastado deixa o destino de soltar
ondragover - O elemento arrastado está no topo do destino de soltar
ondragstart - O usuário começa a arrastar um elemento
ondrop - O elemento arrastado é solto no alvo

=> Prancheta
oncopy - O usuário copia o conteúdo de um elemento
oncut - O usuário corta o conteúdo de um elemento
onpaste - Um usuário cola o conteúdo em um elemento

=> meios de comunicação
onabort - O carregamento da mídia foi abortado
oncanplay - O navegador pode começar a reproduzir mídia (por exemplo, um arquivo tem buffer suficiente)
oncanplaythrough - O navegador pode reproduzir pela mídia sem parar
ondurationchange - A duração das mudanças de mídia
onended - A mídia chegou ao seu fim
onerror - Acontece quando ocorre um erro ao carregar um arquivo externo
onloadeddata - Os dados de mídia são carregados
onloadedmetadata - Metadados (como dimensões e duração) são carregados
onloadstart - O navegador começa a procurar a mídia especificada
onpause - A mídia é pausada pelo usuário ou automaticamente
onplay - A mídia foi iniciada ou não está mais em pausa
onplaying - A mídia está sendo reproduzida após ter sido pausada ou interrompida para armazenamento em buffer
onprogress - O navegador está baixando a mídia
onratechange - A velocidade de reprodução da mídia muda
onseeked - O usuário terminou de mover / pular para uma nova posição na mídia
onseeking - O usuário começa a se mover / pular
onstalled - O navegador está tentando carregar a mídia, mas não está disponível
onsuspend - O navegador não está carregando mídia intencionalmente
ontimeupdate - A posição de jogo mudou (por exemplo, devido ao avanço rápido)
onvolumechange - O volume da mídia mudou (incluindo mudo)
onwaiting - Mídia pausada, mas espera-se que seja retomada (por exemplo, armazenamento em buffer)

=> Animação
animationend - Uma animação CSS está completa
animationiteration - A animação CSS é repetida
animationstart - A animação CSS começou

=> De outros
transitionend - Disparado quando uma transição CSS é concluída
onmessage - Uma mensagem é recebida através da fonte do evento
onoffline - O navegador começa a funcionar offline
ononline - O navegador começa a funcionar online
onpopstate - Quando o histórico da janela muda
onshow- Um <menu>elemento é mostrado como um menu de contexto
onstorage - Uma área de armazenamento da Web é atualizada
ontoggle- O usuário abre ou fecha o <details>elemento
onwheel - A roda do mouse rola para cima ou para baixo sobre um elemento
ontouchcancel - O toque na tela é interrompido
ontouchend - O dedo do usuário é removido de uma tela de toque
ontouchmove - Um dedo é arrastado pela tela
ontouchstart - Um dedo é colocado na tela de toque

    `,
  },
  erros: {
    title: 'Erros',
    content: `
Ao trabalhar com JavaScript, podem ocorrer diferentes erros. Existem várias maneiras de lidar com eles:

try - Permite definir um bloco de código para testar erros
catch - Configure um bloco de código para executar em caso de erro
throw - Crie mensagens de erro personalizadas em vez dos erros padrão de JavaScript
finally - Permite executar o código, depois de tentar e capturar, independentemente do resultado
Valores de nome de erro
JavaScript também possui um objeto de erro embutido. Possui duas propriedades:

name - Define ou retorna o nome do erro
message - Define ou retorna uma mensagem de erro em uma string de

A propriedade de erro pode retornar seis valores diferentes como seu nome:

EvalError- Ocorreu um erro na eval()função
RangeError - Um número está “fora do intervalo”
ReferenceError - Ocorreu uma referência ilegal
SyntaxError - Ocorreu um erro de sintaxe
TypeError - Ocorreu um erro de tipo
URIError- Ocorreu um encodeURI()erro
    `,
  },
  referencia: {
    title: 'referencia',
    content: `
https://websitesetup.org/javascript-cheat-sheet/
https://developer.mozilla.org/pt-BR/
https://javascript.info/`,
  },
};

export default documentationJS;
