# treino-tabnews

treinamento de programação no curso.dev do Filipe Deschamps

## Node.js

> `node -v` # mostra a versão atual<br>
>`nvm ls` # lista as versões disponíveis<br>
>`nvm install lts/hydrogen` # instala a versão especificada<br>
>`nvm alias default lts/hydrogen` # aponta a versão padrão<br>

criar arquivo '.nvmrc' com `lts/hydrogen` e **uma quebra de linha**, para rodar o commando `nvm install` e instalar a versão especificada dentro do arquivo

**_ Os alertas de vulnerabilidades vão ser tratados mais tarde _**

## Manifesto

Criar o arquivo 'package.json' usando `npm init` no terminal

licença: MIT

## Next.js

instalar o next usando `npm install next@13.1.6` (a versão usada no curso.dev)
já é inserido no arquivo 'package.json'

## React.js

> `npm install react@18.2.0`<br>
>`npm install react-dom@18.2.0`<br>
> react-dom é um renderizador HTML

levantando o servidor web: `next dev` no terminal
adicionar no package.json em `"scripts": "dev": "next dev"`
e no terminal executar `npm run dev`
retorna erro pois, apesar de ter iniciado o servidor com sucesso, não existe página para mostrar.

Criar uma pasta 'pages' e dentro um arquivo 'index.js'
criar a função:

> `    function Home() { return <h1>texto</h1> }`
>
> `    export default Home;`

a função deve ser "chamada" com `export default Home` pois podem (e vão) existir outras funções

com isso, o comando `npm run dev` funciona.
Usando codespaces: para tornar a página pública, clicar no ícone da antena na barra de status inferior e, com o botão direito, na coluna `Visibilidade` selecionar `Public`

## Git

> `git log` # registro<br>
>`git log --stat` # registro com detalhes<br>
>`git log --oneline` # registro resumido<br>
>`git status` # mostra o status do projeto<br>
>`git diff` # mostra a diferença entre as versões<br>
>`git add nome_do_arquivoou_pasta` # adiciona ao status staged<br>
>`git commit` # se compromete!<br>
>`git commit --amend` # substitui o último commit com o atual<br>
>`git commit -m "mensagem"` # atalho para fazer novos commits<br>
>`git push` # empurra as alteraçoes locais para o 'origin'<br>
>`git push --force` # empurra as alteraçoes de forma forçada<br>
>`git push -f` # mesmo que o anterior<br>
>`git add -A` # adiciona todos os arquivos alterados para staged<br>

## Deploy usando Vercel

https://vercel.com/

## Configurações de Formatação

adicionar extensão 'EditorConfig'

> criar um arquivo '.editorconfig' com as configurações:<br>
>
> > `root = true` # mostra para o VSCode onde parar de procurar o arquivo<br>
> >
> > `[*]` # tipos de arquivo para formatar (\* == todos)<br>
> >`indent_style = space`<br>
> >`indent_size = 2` # indentação recomendada para javascript<br>

adicionar extenção 'Prettier'

> com `npm install prettier --save-dev` ou<br>
> com `npm install prettier -D` para registrar em<br>
> 'package.json' como uma dependência apenas de desenvolvimento<br>
>
> adicionar scripts em 'package.json':<br>
>
> > `"lint:check": "prettier --check ."`<br>
> > `"lint:fix": "prettier --write ."`<br>
>
> rodar os comandos com `npm run lint:check` para conferir<br>
> e `npm run lint:fix` para reescrever<br>
> também adicionar 'Prettier' no marketplace para formatar durante o<br>
> desenvolvimento quando salvar<br>
>
> definir 'default formatter' para o 'Prettier'<br>
> habilitar 'format on save'<br>
> e desabilitar 'auto save' para no futuro não<br>
> conflitar com testes automatizados<br>
> pode acontecer do `lint:fix` do Prettier não ignorar a<br>
> pasta '.next'<br>
> é necessário adicionar um arquivo '.prettierignore' com<br>
> a pasta especicada declarada<br>

## DNS

nic.br<br>
whatsmydns.net<br>
`sudo apt install dnsutils`<br>
`dig curso.dev A` # A: endereço; TXT: texto; NS: nameserver; AAAA: IPv6; MX: mail exchanger; SOA: start of authority<br>
`dig curso.dev TXT +trace` # caminho<br>

Registrar um domínio em [registro.br](https://registro.br). No site da Vercel em 'Domains' usar 'add Existing' e salvar o dominio no projeto. Nesse caso vamos usar os 'Nameservers' da Vercel e adicioná-los na sua conta no domínio em DNS. Isso deve levar 2h para concluir.

## Arquitetura e Pastas

📦 root<br>
┣ 📂 pages<br>
┃ ┗ 📜 index.js<br>
┣ 📂 models<br>
┃ ┣ 📜 user.js<br>
┃ ┣ 📜 content.js<br>
┃ ┗ 📜 password.js<br>
┣ 📂 infra<br>
┃ ┗ 📜 database.js<br>
┃ ┣ 📂 migrations<br>
┃ ┣ 📂 provisioning<br>
┃ ┃ ┣ 📂 staging<br>
┃ ┃ ┣ 📂 production<br>
┣ 📂 tests<br>

## Testes

`"jest": "^29.6.2"`<br>
`"test": "jest"`<br>
`"test:watch": "jest --watch"`<br>

## Docker

`"postgres:16.4-alpine3.19"` (11-nov-2024)<br>
`docker compose up`<br>
`docker compose --file infra/compose.yaml up`<br>
`docker compose down`<br>
`docker ps --all` lista todas as imagens rodando<br>
`docker compose up --detach --force-recreate` força recriar a imagem sem usar 'down'<br>

`psql --hot=localhost --username=postgres --port:5432` psql é o client postgres<br>
