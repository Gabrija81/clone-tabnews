import React from 'react';

function Home() {
  // O texto está dentro de crases (backticks) para permitir múltiplas linhas
  // A classe 'whitespace-pre-line' faz o navegador respeitar os 'enters' que damos no código
  const lyrics = `Você apareceu do nada
  E você mexeu demais comigo
  Não quero ser só mais um amigo

  Você nunca me ouviu chorar
  Não dá pra imaginar quando

  É cedo ou tarde demais

  Às vezes fico assim pensando
  Essa distância é tão ruim
  Por que você não vem pra mim?`;

  return (
    // Container principal ocupando a tela toda (min-h-screen)
    // Fundo com a cor exata pedida (#131415)
    // Texto centralizado e flexbox para alinhar tudo no meio
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#131415]">
      
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          2S
        </h1>
        
        {/* Aqui está a mágica: whitespace-pre-line 
           text-gray-300 é um cinza bem claro, ótimo para leitura em fundo escuro.
        */}
        <p className="text-lg md:text-xl text-gray-300 whitespace-pre-line leading-relaxed">
          {lyrics}
        </p>
      </div>
      
    </div>
  );
}

export default Home;
