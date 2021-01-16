```sh
  ____               ____  _     _       ____ _     ___
 |  _ \  ___   ___  |  _ \(_)___| | __  / ___| |   |_ _|
 | | | |/ _ \ / __| | | | | / __| |/ / | |   | |    | |
 | |_| | (_) | (__  | |_| | \__ \   <  | |___| |___ | |
 |____/ \___/ \___| |____/|_|___/_|\_\  \____|_____|___|

```
### Resumo

Docflux e uma aplicação de linha de comando que reuni uma pequena
documentação de algumas ferramentas e linguagem de programação
que tenho estudado.

A documentação será disponibilizada em pt_br e em en-us.

### Linguagem

* `golang`
* `javascript`

### Usage

O comando `npx docdisk doc -t basic javascript` retorna a documentação do tópico básico do javascript

```bash
$npx docdisk doc -t basic javascript

  ____               ____  _     _       ____ _     ___
 |  _ \  ___   ___  |  _ \(_)___| | __  / ___| |   |_ _|
 | | | |/ _ \ / __| | | | | / __| |/ / | |   | |    | |
 | |_| | (_) | (__  | |_| | \__ \   <  | |___| |___ | |
 |____/ \___/ \___| |____/|_|___/_|\_\  \____|_____|___|

Javascript Basics
Vamos começar com o básico - como incluir JavaScript em um site.
Incluindo JavaScript em uma página HTML
Para incluir JavaScript dentro de uma página, você precisa envolvê-lo em <script>tags:

< script type = "text / javascript" >
// o código JS vai aqui
< / script > ...

```
O comando `npx docdisk doc javascript` sem passar a fleg -t retorna o menu de tópicos javascript

```bash
  ____               ____  _     _       ____ _     ___
 |  _ \  ___   ___  |  _ \(_)___| | __  / ___| |   |_ _|
 | | | |/ _ \ / __| | | | | / __| |/ / | |   | |    | |
 | |_| | (_) | (__  | |_| | \__ \   <  | |___| |___ | |
 |____/ \___/ \___| |____/|_|___/_|\_\  \____|_____|___|

?
    Javascript Topics
1. basic
2. variaveis
3. tipos de dados
4. objetos
5. array
6. operadores
7. funcoes
8. saida de dados
9. funcoes globais
10. loops e fluxo
11. caracteres de fuga
12. string
13. expressao regular
14. number
15. datas
16. DOM
17. erros
18. reference
==>  basic //inserção do tópico escolhido

```
obs: apos a escolha do tópico sera mostrado a documentação do referente ao tópico escolhido

O comando `npx docdisk --help` retorna o menu de ajuda

```bash
$ npx docdisk --help

Usage: docflux doc [options] [tool]

shows the documentation of topic of the chosen language

Options:
  - -l, --language [language]  documentation language
  - -t, --topic <topic>        returns a specific topic
  - -h, --help                 display help for command

```
### Contribuição

Qualquer contribuição e sempre bem vinda, acrescente qualquer
linguagem que domine isso pode ajudar alguém.

