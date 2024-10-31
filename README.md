# treino-tabnews
treinamento de programação no curso.dev do Filipe Deschamps

## Node.js
node -v
nvm install lts/hydrogen
nvm alias default  lts/hydrogen # aponta a versão padrão

criar arquivo '.nvmrc' com 'lts/hydrogen' e uma quebra de linha, para rodar o commando 'nvm install' e instalar a versão especificada

*** Os alertas de vulnerabilidades vão ser tratados mais tarde ***
## Manifesto
Criar o arquivo 'package.json' usando 'npm init' no terminal

lcença: MIT

## Next.js
instalar o next usando 'npm install next@13.1.6' (a versão usada no curso.dev)
já é inserido no arquivo 'package.json'

## React.js
'npm install react@18.2.0'
'npm install react-dom@18.2.0'
react-dom é um renderizador HTML


levantando o servidor web: 'next dev' no terminal
adicionar no package.json em "scripts": "dev": "next dev"
no terminal 'npm run dev'
    retorna erro pois, apesar de ter iniciado o servidor com sucesso, não existe página para mostrar.

Criar uma pasta 'pages' e dentro um arquivo 'index.js'
criar a função:
>`    function Home() { return <h1>texto</h1> }`
>
>`    export default Home;`

a função deve ser 'chamada' com 'export default Home' pois podem (e vão) existir outras funções

com isso, o comando 'npm run dev' funciona.
Usando codespaces: para tornar a página pública, clicar no ícone da antena na barra de estatus inferior e , com o botão direito na coluna 'Visibilidade' selecionar 'Public'

## Git
git log  # registro
git log --stat  # registro com detalhes
git log --oneline  # registro resumido
git status  # mostra o status do projeto
