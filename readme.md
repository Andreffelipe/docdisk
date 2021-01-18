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

A documentação será disponibilizada em pt_br.

### Linguagem

* `go`
* `javascript`

### Boas Práticas

* `ccjs` 

obs: `ccjs` clean code javascript

### Instalação

Ao instalar use a Instalação global e tenha acesso global ao pacote

usando npm
```sh
$ npm install -g docdisk
```
usando yarn
```sh
$ yarn global add docdisk
```

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
2. TD (tipos de dados)
3. objetos
4. array
5. operadores
6. funcoes
7. SD (saida de dados)
8. FG (funcoes globais)
9. LF (loops e fluxo)
10. CF (caracteres de fuga)
11. string
12. ER (expressao regular)
13. number
14. datas
15. DOM
16. erros
17. reference
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

