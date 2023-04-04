import { Component, OnInit } from '@angular/core';

interface Pergunta {
  id: number;
  texto: string;
  alternativas: string[];
  resposta: number;
  selectedOption?: number;
}

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {
  perguntas: Pergunta[] = [
    {
      id: 1,
      texto: 'O que é a IHC?',
      alternativas: ['IHC é o processo de criação de interfaces de usuário para softwares e aplicativos.',
      'IHC é uma técnica utilizada para desenvolver sistemas de inteligência artificial.',
      'IHC é o design, a avaliação e a implementação de sistemas computacionais interativos para uso humano e como estudo de fenômenos importantes que o rodeiam.',
      'IHC é uma técnica de análise de dados para entender o comportamento humano em ambientes virtuais.'],
      resposta: 2 // C - 3
    },
    {
      id: 2,
      texto: 'Qual é o papel do design da interação na IHC?',
      alternativas: ['O papel do design da interação na IHC é garantir que o software seja esteticamente atraente.',
      'Os designers da interação são envolvidos com todos os aspectos interativos de um produto e não somente a parte gráfica.',
      'O papel do design da interação na IHC é apenas desenvolver os aspectos visuais de um produto.',
      'O papel do design da interação na IHC é apenas criar wireframes e layouts de página.'],
      resposta: 1 // B - 2
    },
    {
      id: 3,
      texto: 'Qual é o papel do engenheiro de usabilidade na IHC?',
      alternativas: ['O Engenheiro de usabilidade avalia produtos utilizando métodos e princípios de usabilidade.',
      'O papel do engenheiro de usabilidade na IHC é apenas avaliar a acessibilidade do produto.',
      'O papel do engenheiro de usabilidade na IHC é criar soluções para problemas de hardware.',
      'O papel do engenheiro de usabilidade na IHC é apenas coletar feedback dos usuários.'],
      resposta: 0 // A - 1
    },
    {
      id: 4,
      texto: 'Qual é o papel do User experience designer (UX) na IHC?',
      alternativas: ['User experience designers (UX) são responsáveis apenas pelo design gráfico de um produto.',
      'User experience designers (UX) são responsáveis apenas pelo design de interação de um produto.      ',
      'User experience designers (UX) são responsáveis apenas pelo marketing de um produto.',
      'User experience designers (UX) são pessoas que realizam as tarefas de design deinteração e engenheiro de usabilidade e também estudos de campo a fim de fomentar o design dos produtos.'],
      resposta: 3 // D - 4
    },
    {
      id: 5,
      texto: 'O que é o Design na IHC?',
      alternativas: ['O Design na IHC é apenas o processo de criação de elementos gráficos.',
      'É um processo com três atividades básicas: análise, síntese e avaliação.',
      'O Design na IHC é apenas o processo de desenvolvimento de wireframes.',
      'O Design na IHC é apenas o processo de codificação do produto.'],
      resposta: 1 // B - 2
    },
    {
      id: 6,
      texto: 'O que é o pitch deck?',
      alternativas: ['Identificar um problema não é importante em um pitch deck, o que importa é mostrar o quão inovadora é a solução apresentada',
      'O pitch deck é uma apresentação que resume o conceito de uma empresa, sua proposta de valor, modelo de negócio, tamanho do mercado e outros elementos irrelevantes para investidores e potenciais parceiros de negócios.',
      'O pitch deck não é uma apresentação que resume o conceito de uma empresa, sua proposta de valor, modelo de negócio, tamanho do mercado, principais competidores e outros elementos importantes para investidores e potenciais parceiros de negócios.',
      'O pitch deck é uma apresentação que resume o conceito de uma empresa, sua proposta de valor, modelo de negócio, tamanho do mercado, principais competidores e outros elementos importantes para investidores e potenciais parceiros de negócios.'],
      resposta: 3 // D - 4
    },
    {
      id: 7,
      texto: 'Por que é importante falar sobre o problema em um pitch deck?',
      alternativas: ['Falar sobre o problema em um pitch deck é importante apenas se a empresa já tem uma solução totalmente desenvolvida e pronta para ser lançada no mercado.',
      'Falar sobre o problema em um pitch deck é irrelevante, já que os investidores estão mais interessados na solução que a empresa oferece.',
      'Identificar um problema é o primeiro passo para criar uma solução de sucesso.Os investidores querem ver que a empresa tem uma compreensão clara do problema que estão resolvendo e que sua solução é relevante para o mercado-alvo.',
      ' É importante não falar sobre o problema em um pitch deck, para não parecer que a empresa ainda não tem uma solução clara para oferecer.'],
      resposta: 2 // C - 3
    },
    {
      id: 8,
      texto: 'Como explicar a proposta de valor em um pitch deck?',
      alternativas: ['Para explicar a proposta de valor em um pitch deck, é importante utilizar termos técnicos e complexos, para mostrar que a empresa é altamente especializada.',
      'A proposta de valor não precisa ser tão clara em um pitch deck, já que os investidores podem fazer suas próprias interpretações com base em outros elementos apresentados.',
      'É importante não mencionar os concorrentes ao explicar a proposta de valor em um pitch deck, para evitar que os investidores tenham dúvidas sobre a viabilidade do negócio.      ',
      'A proposta de valor deve ser clara e concisa. Ela deve descrever o que a empresa faz, quais problemas ela resolve e como é diferente dos concorrentes. Émimportante mostrar como a proposta de valor pode ser escalável e lucrativa.'],
      resposta: 3 // D - 4
    },
    {
      id: 9,
      texto: 'O que é um modelo de negócio e como ele deve ser apresentado em um pitch deck?',
      alternativas: ['O modelo de negócio é a estrutura organizacional da empresa, incluindo hierarquia e funções de cada funcionário. Em um pitch deck, é importante apresentar um organograma detalhado da empresa para que os investidores possam ver como a empresa está estruturada.',
      ' O modelo de negócio é a forma como a empresa gera receita e sustenta suas operações. É importante apresentar dados detalhados sobre os custos da empresa, sem deixar de for a nenhum detalhe, por menor que seja. Os investidores querem saber exatamente onde o dinheiro está sendo investido e como a empresa planeja reduzir seus gastos.',
      'O modelo de negócio é a forma como a empresa gera receita e sustenta suas operações. É importante descrever como a empresa ganha dinheiro, como ela pretende escalar e quais são as principais fontes de receita.',
      'Um modelo de negócio é a forma como a empresa gasta dinheiro para manter suas operações. Em um pitch deck, é importante apresentar o quanto a empresa gasta em despesas operacionais, como salários e aluguel, para que os investidores possam ter uma ideia clara dos custos envolvidos.'],
      resposta: 2 // C - 3
    },
    {
      id: 10,
      texto: 'Por que o tamanho do mercado é uma consideração importante em um pitch deck?',
      alternativas: ['O tamanho do mercado é um fator importante para os investidores. Eles queremsaber se a empresa está atuando em um mercado grande o suficiente para gerar receita significativa. É importante apresentar dados confiáveis sobre o tamanho do mercado-alvo e como a empresa pretende conquistá-lo.',
      'O tamanho do mercado é importante em um pitch deck porque os investidores querem saber se a empresa está atuando em um mercado grande o suficiente para gerar receita significativa. Mas, em vez de apresentar dados confiáveis sobre o tamanho do mercado-alvo, é melhor apenas destacar a paixão e a dedicação da equipe por trás da ideia da empresa.',
      'O tamanho do mercado não é realmente importante em um pitch deck. O que importa é a ideia inovadora da empresa e a paixão da equipe por trás dela. Se os investidores acreditam na ideia e na equipe, o tamanho do mercado não é um fator crítico.',
      ' O tamanho do mercado é importante, mas não é tão relevante quanto a taxa de crescimento do mercado. Os investidores querem ver que a empresa está em um mercado em expansão, o que significa que há espaço para crescer e aumentar a participação de mercado. Portanto, é importante enfatizar a taxa de crescimento do mercado-alvo, e não apenas o tamanho atual.'],
      resposta: 0 // A - 1
    },
    {
      id: 11,
      texto: 'Como identificar e falar sobre os principais competidores em um pitch deck?',
      alternativas: ['Na hora de falar sobre os concorrentes em um pitch, é importante não mencioná-los diretamente para não expor a estratégia da empresa. Em vez disso, fale sobre as oportunidades de mercado e como a empresa pretende aproveitá-las. Não é necessário demonstrar como a empresa se diferencia dos concorrentes.',
      'Identificar os principais concorrentes é irrelevante em um pitch deck. Em vez disso, é melhor focar na vantagem exclusiva da empresa e no valor que ela pode fornecer ao mercado-alvo. Destacar o que torna a empresa única é muito mais eficaz do que gastar tempo falando sobre os concorrentes.',
      'Não é necessário falar sobre os concorrentes em um pitch deck, pois isso pode distrair os investidores da proposta única da empresa. É melhor se concentrar em destacar os benefícios do produto ou serviço da empresa e como ele pode ser lucrativo.',
      'É importante identificar os principais concorrentes da empresa e mostrar comoela se diferencia deles. Isso pode incluir preços, recursos exclusivos, qualidade do produto ou serviço, alcance geográfico e outros fatores relevantes para o mercado-alvo. É importante mostrar que a empresa tem uma estratégia clara para competir e conquistar participação de mercado.'],
      resposta: 3 // D - 4
    },
    {
      id: 12,
      texto: 'O que é um pitch focado em UX?',
      alternativas: ['Um pitch focado em UX é uma apresentação curta e persuasiva que se concentra principalmente em gráficos e animações para impressionar os investidores. Ele visa convencer os investidores através de recursos visuais e estéticos, em vez de explicar como o produto ou ideia resolverá problemas específicos dos usuários.',
      'Um pitch focado em UX é uma apresentação curta e persuasiva que descreve um produto ou ideia com um forte foco na experiência do usuário. Ele visa convencer investidores, parceiros de negócios ou outros stakeholders sobre o valor do produto ou ideia, destacando como ele resolverá problemas específicos dos usuários.',
      'Um pitch focado em UX é uma apresentação curta e persuasiva que descreve um produto ou ideia com um forte foco na aparência e design visual do produto. Ele visa convencer investidores, parceiros de negócios ou outros stakeholders sobre a aparência do produto ou ideia, destacando sua estética e aparência atraentes.',
      'um pitch focado em UX é uma apresentação longa e detalhada que se concentra exclusivamente na interface do usuário. Ele não aborda a proposta de valor do produto ou serviço da empresa, mas apenas o design da experiência do usuário.'],
      resposta: 1 // B - 2
    },
    {
      id: 13,
      texto: 'Quais são os elementos chave de um pitch focado em UX?',
      alternativas: ['Os elementos chave de um pitch focado em UX incluem um layout bem elaborado e estilizado, muitas imagens e animações, e a mínima quantidade de texto possível. É importante evitar explicar demais sobre o produto ou ideia, já que a apresentação deve ser focada principalmente na aparência e na estética.',
      'É um processo com três atividades básicas: análise, síntese e avaliação.',
      'Os elementos chave de um pitch focado em UX incluem uma descrição clara e sucinta do problema do usuário que o produto ou ideia resolve, um resumo das soluções existentes e como o produto ou ideia se diferencia, uma demonstração de como o produto ou ideia atende às necessidades do usuário e uma visão geral da estratégia de UX para garantir a satisfação do usuário.',
      'Os elementos chave de um pitch focado em UX incluem uma descrição clara e detalhada do produto ou ideia, com foco no visual e aparência, uma demonstração de como o produto é visualmente atraente e um destaque para o quão bonito o design é. Não é necessário incluir informações detalhadas sobre a função do produto, desde que o design seja esteticamente atraente.'],
      resposta: 2 // C - 3
    },
    {
      id: 14,
      texto: 'Qual é o objetivo principal de um pitch focado em UX?',
      alternativas: ['O objetivo principal de um pitch focado em UX é persuadir investidores, parceiros de negócios ou outros stakeholders de que o produto ou ideia oferece uma experiência do usuário superior e, portanto, tem um grande potencial de sucesso.',
      'O objetivo principal de um pitch focado em UX é convencer os usuários a comprar o produto, independentemente da qualidade da experiência do usuário.',
      'O objetivo principal de um pitch focado em UX é impressionar os investidores com gráficos e imagens sofisticadas, em vez de realmente apresentar uma experiência de usuário aprimorada.',
      'O objetivo principal de um pitch focado em UX é criar uma história emocionante em torno do produto, sem se preocupar com a efetividade da experiência do usuário.'],
      resposta: 0 // A - 1
    },
    {
      id: 15,
      texto: 'Como você pode tornar um pitch focado em UX mais eficaz?',
      alternativas: ['A maneira mais eficaz de tornar um pitch focado em UX mais eficaz é não se preocupar em preparar o pitch com antecedência e improvisar no momento.',
      'O objetivo principal de um pitch focado em UX é descrever os recursos e benefícios do produto sem mencionar a experiência do usuário.',
      'O objetivo principal de um pitch focado em UX é vender uma ideia sem se importar com a experiência do usuário.',
      'Um pitch focado em UX pode ser mais eficaz se incluir estudos de caso, dados de usuário, demonstrações interativas, protótipos de alta fidelidade e depoimentos de usuários satisfeitos para mostrar o valor do produto ou ideia.'],
      resposta: 3 // D - 4
    },
    {
      id: 16,
      texto: 'Qual é a importância da pesquisa de UX na elaboração de um pitch?',
      alternativas: ['A pesquisa de UX não é importante na elaboração de um pitch, já que o importante é apenas apresentar a ideia de forma persuasiva e convincente.',
      'A pesquisa de UX é fundamental para entender as necessidades e desejos dos usuários e, portanto, para garantir que o pitch seja convincente. Ela pode ajudar a identificar problemas que o produto ou ideia resolve, entender o público-alvo e desenvolver uma estratégia de UX para fornecer uma experiência do usuário excepcional.',
      'A pesquisa de UX é importante, mas apenas para projetos que envolvem experiências virtuais, como jogos ou aplicativos.',
      'A pesquisa de UX é importante, mas apenas para empresas que já têm uma presença forte no mercado e querem melhorar a experiência do usuário existente.'],
      resposta: 1 // B - 2
    },
    {
      id: 17,
      texto: 'Como a estratégia de UX pode ser incorporada em um pitch?',
      alternativas: ['A estratégia de UX não precisa ser incorporada em um pitch, pois o que importa é a ideia em si.',
      'A estratégia de UX pode ser incorporada em um pitch, mas apenas se o público-alvo do produto ou ideia for composto por designers e desenvolvedores.',
      'A estratégia de UX pode ser incorporada em um pitch, mas apenas se houver tempo suficiente para explicar todos os detalhes.',
      'A estratégia de UX pode ser incorporada em um pitch por meio de uma descrição clara e concisa dos métodos e técnicas utilizados para garantir que o produto ou ideia atenda às necessidades do usuário. Isso pode incluir pesquisa de usuário, testes de usabilidade e design centrado no usuário.'],
      resposta: 3 // D - 4
    },
    {
      id: 18,
      texto: 'Como você pode medir o sucesso de um pitch focado em UX?',
      alternativas: ['O sucesso de um pitch focado em UX pode ser medido pelo número de investidores ou parceiros de negócios que se mostraram interessados no produto ou ideia, pelos  comentários e feedbacks positivos dos stakeholders e pelos indicadores de  desempenho, como a taxa de conversão do produto.',
      'O sucesso de um pitch focado em UX não pode ser medido, pois é subjetivo e varia de pessoa para pessoa',
      'O sucesso de um pitch focado em UX pode ser medido apenas pelo número de investidores que concordam em investir no projeto.',
      'O sucesso de um pitch focado em UX pode ser medido apenas pela quantidade de feedback positivo que a equipe recebe após a apresentação.'],
      resposta: 0 // A - 1
    },
    {
      id: 19,
      texto: 'O que é uma persona no UX?',
      alternativas: ['Uma persona no UX é uma pessoa fictícia que representa um usuário ideal.',
      'Uma persona no UX é uma pessoa real que é contratada para testar um produto.',
      'Uma persona no UX é uma representação fictícia de um usuário típico de um produto ou serviço, criada com base em dados e pesquisas de mercado para ajudar na tomada de decisões de design.',
      'Uma persona no UX é uma ferramenta usada apenas por empresas de grande porte para entender o comportamento do usuário.'],
      resposta: 2 // C - 3
    },
    {
      id: 20,
      texto: 'Por que é importante criar personas no UX?',
      alternativas: ['Criar personas no UX é completamente desnecessário e não tem qualquer importância.',
      'Personas podem ser criadas, mas apenas como um passatempo, não tendo nenhuma relação com o UX.',
      'Criar personas no UX ajuda a equipe de design a entender melhor as necessidades, desejos e comportamentos dos usuários finais. Isso ajuda a criar experiências de usuário mais relevantes e eficazes, aumentando a probabilidade de sucesso do produto ou serviço.',
      'Personas não são importantes no UX, uma vez que a criação de um bom produto depende somente das habilidades técnicas da equipe de desenvolvimento.'],
      resposta: 2 // C - 3
    },
    {
      id: 21,
      texto: 'Como criar uma persona no UX?',
      alternativas: ['Para criar uma persona no UX, é necessário usar uma bola de cristal e tentar adivinhar quais são as preferências do usuário.',
      'Criar uma persona no UX é fácil: basta escolher um personagem de desenho animado que você goste e atribuir a ele as características que você acha que seu público-alvo terá.',
      'Para criar uma persona no UX, é importante realizar pesquisas de mercado e análises de dados para identificar as características comuns dos usuários finais. Isso inclui sua idade, gênero, nível de escolaridade, hábitos de consumo, comportamentos de compra, preferências de tecnologia, entre outros fatores relevantes.',
      'A criação de uma persona no UX é uma tarefa impossível, pois é impossível compreender a mente humana.'],
      resposta: 2  // C - 3
    },
    {
      id: 22,
      texto: 'Qual é a diferença entre persona e público-alvo?',
      alternativas: ['Persona e público-alvo são a mesma coisa e podem ser usados de forma intercambiável.',
      'O público-alvo é uma descrição mais geral de um grupo de pessoas que podem se interessar por um produto ou serviço, enquanto a persona é uma representação mais detalhada e específica de um usuário típico dentro desse grupo.',
      'A diferença entre persona e público-alvo é que o primeiro é um conceito do mundo da ficção e o segundo é uma realidade.',
      'Persona é um termo em latim que significa "público-alvo" em português.'],
      resposta: 1 // B - 2
    },
    {
      id: 23,
      texto: 'O que é um mapa de empatia da UX?',
      alternativas: ['Um mapa de empatia da UX é uma ferramenta visual que ajuda os designers de UX a entenderem melhor seus usuários, suas necessidades, desejos e comportamentos.',
      'Um mapa de empatia da UX é uma ferramenta usada para mapear a topografia emocional dos usuários, para que possamos entender melhor como eles se sentem sobre o produto ou serviço.',
      'Um mapa de empatia da UX é um mapa topográfico que mostra como os usuários interagem com o produto ou serviço.',
      'Um mapa de empatia da UX é um mapa que mostra o caminho que os usuários seguem em seu processo de compra.'],
      resposta: 0 // A - 1
    },
    {
      id: 24,
      texto: 'Quais são as seções do mapa de empatia da UX?',
      alternativas: ['As seções do mapa de empatia da UX são: recursos, equipe, design, tecnologia e orçamento.',
      'As seções do mapa de empatia da UX são: missão, visão, valores, objetivos e estratégias.',
      'As seções do mapa de empatia da UX são: problemas, soluções, processos, resultados e feedback.',
      'As seções do mapa de empatia da UX incluem: persona, influências, tarefas, objetivos, barreiras, emoções, insights e soluções.'],
      resposta: 3 // D - 4
    },
    {
      id: 25,
      texto: 'Como o mapa de empatia da UX pode ser usado em um projeto de design?',
      alternativas: ['O mapa de empatia da UX pode ser usado para identificar os concorrentes e suas estratégias de design.',
      'O mapa de empatia da UX pode ser usado em um projeto de design para ajudar os designers a compreenderem melhor seus usuários e criar soluções que atendam às suas necessidades.',
      'O mapa de empatia da UX pode ser usado para criar um plano de marketing para o produto ou serviço.',
      'O mapa de empatia da UX pode ser usado para identificar as necessidades e desejos dos usuários e para projetar uma experiência de usuário mais satisfatória.'],
      resposta: 1 // B - 2
    },
    {
      id: 26,
      texto: 'Como o mapa de empatia da UX pode ajudar a equipe a tomar decisões de design?',
      alternativas: ['O mapa de empatia da UX pode ajudar a equipe a tomar decisões de design informadas, baseadas em insights sobre as necessidades e desejos dos usuários.',
      'O mapa de empatia da UX pode ajudar a equipe a tomar decisões de design informadas, baseadas em insights sobre as necessidades e desejos dos usuários.',
      'O mapa de empatia da UX pode ser usado para criar um plano de marketing para o produto ou serviço.      ',
      'O mapa de empatia da UX pode ser usado para identificar as necessidades e desejos dos usuários e para projetar uma experiência de usuário mais satisfatória.'],
      resposta: 1 // B - 2
    },
    {
      id: 27,
      texto: 'O que é o BMC (Business Model Canvas)?',
      alternativas: ['O BMC é um modelo de negócio que envolve a criação de um livro de receitas para a empresa.',
      'O BMC é uma ferramenta de gerenciamento de projetos usada para rastrear o progresso do projeto.',
      'O BMC é uma ferramenta visual que ajuda a descrever e entender o modelo de negócios de uma empresa.',
      'O BMC é uma metodologia de design thinking que ajuda as equipes a criar soluções inovadoras para os desafios de negócios.'],
      resposta: 2 // C - 3
    },
    {
      id: 28,
      texto: 'Qual é a finalidade do BMC?',
      alternativas: ['O BMC é utilizado para descrever a estratégia de marketing de uma empresa.',
      'O BMC é um instrumento de percussão utilizado em ritmos musicais brasileiros.',
      'O BMC é um modelo de bicicleta elétrica de alta performance.',
      'A finalidade do BMC é fornecer uma visão geral clara e concisa do modelo de negócios de uma empresa, permitindo que as partes interessadas compreendam facilmente como a empresa cria, entrega e captura valor.'],
      resposta: 3 // D - 4
    },
    {
      id: 29,
      texto: 'Quais são os nove blocos que compõem o BMC?',
      alternativas: ['Os nove blocos do BMC são: Proposta de Valor, Segmentos de Clientes, Canais, Relacionamento com Clientes, Fontes de Receita, Recursos Chave, Atividades Chave, Parcerias Chave e Estrutura de Custos.',
      'Os nove blocos do BMC são: marca, produto, preço, praça, promoção, pessoas, processos, físico e digital.',
      'Os nove blocos do BMC são: alimentação, transporte, saúde, lazer, moda, tecnologia, educação, financeiro e segurança.',
      'Os nove blocos do BMC são: direção, produção, atores, roteiro, trilha sonora, efeitos especiais, maquiagem, figurino e fotografia.'],
      resposta: 0 // A - 1
    },
    {
      id: 30,
      texto: 'Como o BMC pode ser usado em uma empresa?',
      alternativas: ['O BMC pode ser usado como decoração em uma empresa.',
      'O BMC pode ser usado para identificar oportunidades de crescimento, analisar a concorrência, planejar novos produtos e serviços, entre outras aplicações.',
      'O BMC pode ser usado como papel de parede em um escritório.',
      'O BMC pode ser usado como jogo de tabuleiro para os funcionários.'],
      resposta: 1 // B - 2
    },
    {
      id: 31,
      texto: 'Para que serve o bloco de Proposta de valor?',
      alternativas: ['O bloco de Proposta de valor serve para descrever a cor do logo da empresa.',
      'O bloco de Proposta de valor serve para indicar a temperatura do ar condicionado na empresa.',
      'O bloco de Proposta de valor ajuda a definir qual é a proposta que a empresa oferece aos clientes, ou seja, o que a empresa vende.',
      'O bloco de Proposta de valor serve para descrever o valor que a empresa oferece ao cliente.'],
      resposta: 2 // C - 3
    },
    {
      id: 32,
      texto: 'O que são Segmentos de clientes?',
      alternativas: ['Segmentos de clientes são produtos alimentícios que não são saudáveis.',
      'Segmentos de clientes são áreas de trabalho em uma empresa.',
      'Segmentos de clientes são grupos de consumidores com necessidades e características semelhantes que uma empresa atende.',
      'Segmentos de clientes são os grupos de pessoas ou empresas que a empresa deseja atender e que são relevantes para o seu negócio.'],
      resposta: 3 // D - 4
    },
    {
      id: 33,
      texto: 'Qual é a importância do bloco de Canais?',
      alternativas: ['O bloco de Canais ajuda a definir como a empresa se comunica e se relaciona com seus clientes e como entrega sua proposta de valor.',
      'O bloco de Canais é irrelevante para a empresa se comunicar com seus clientes e entregar sua proposta de valor.',
      'O bloco de Canais é importante apenas para empresas que não têm clientes.',
      'O bloco de Canais é importante apenas para empresas que não precisam se comunicar com seus clientes.'],
      resposta: 0 // A - 1
    },
    {
      id: 34,
      texto: 'O que são Fontes de receita?',
      alternativas: ['Fontes de receita são as formas pelas quais a empresa gera despesas, ou seja, como ela gasta dinheiro.',
      'Fontes de receita são as formas pelas quais a empresa gera receita, ou seja, como ela ganha dinheiro.',
      'Fontes de receita são as formas pelas quais a empresa atrai funcionários, ou seja, como ela recruta pessoas.',
      'Fontes de receita são as formas pelas quais a empresa coleta dados, ou seja, como ela obtém informações.'],
      resposta: 1 // B - 2
    },
    {
      id: 35,
      texto: 'Qual é a função dos blocos Recursos chave e Atividades chave?',
      alternativas: ['Recursos chave e Atividades chave são blocos opcionais no BMC e não têm função definida.',
      'Recursos chave e Atividades chave são blocos importantes apenas para empresas pequenas, não sendo necessários em empresas maiores.',
      'Recursos chave e Atividades chave ajudam a definir os recursos e atividades mais importantes para o funcionamento do negócio.',
      'Recursos chave e Atividades chave referem-se apenas aos recursos físicos e atividades operacionais da empresa, não levando em conta aspectos estratégicos.'],
      resposta: 2 // C - 3
    },
    {
      id: 36,
      texto: 'O que são Parcerias chave?',
      alternativas: ['Parcerias chave são as relações estabelecidas pela empresa com outras empresas ou organizações que prejudicam a criação ou entrega de valor aos clientes.',
      'Parcerias chave são as relações estabelecidas pela empresa com outras empresas ou organizações que não têm nenhuma relevância para o negócio.',
      'Parcerias chave são as relações estabelecidas pela empresa com outras empresas ou organizações que são prejudiciais à concorrência.',
      'Parcerias chave são as relações estabelecidas pela empresa com outras empresas ou organizações que ajudam a criar ou entregar valor aos clientes.'],
      resposta: 3 // D - 4
    },
    {
      id: 37,
      texto: 'Qual é a vantagem de usar o BMC em um negócio?',
      alternativas: ['O BMC ajuda a criar uma visão mais clara do modelo de negócios da empresa, identificar oportunidades de crescimento e inovação, e alinhar as estratégias da empresa com os objetivos do negócio.',
      'Usar o BMC não tem nenhuma vantagem para o negócio.',
      'O BMC é difícil de entender e pode confundir os gestores.',
      'O BMC não ajuda a identificar oportunidades de crescimento ou inovação.'],
      resposta: 0 // A - 1
    },
    {
      id: 38,
      texto: 'Qual a relação do BMC com a UX?',
      alternativas: ['O BMC (Business Model Canvas) e a UX (User Experience) estão relacionados na medida em que ambos têm como objetivo criar uma melhor experiência para o cliente. Enquanto o BMC ajuda a criar um modelo de negócios que atenda às necessidades dos clientes, a UX se concentra em criar uma experiência positiva para o cliente em relação ao uso de um produto ou serviço específico. Dessa forma, ao utilizar o BMC para definir o modelo de negócios, a empresa pode se concentrar em fornecer uma experiência de usuário mais adequada, considerando as necessidades e desejos dos clientes. Além disso, a UX também pode ser aplicada na concepção do próprio BMC, tornando-o mais fácil e intuitivo de usar, melhorando assim a experiência do usuário que o utiliza. Em resumo, ambos têm como objetivo melhorar a relação entre a empresa e seus clientes, criando uma experiência mais satisfatória e positiva para ambas as partes.',
      'É um processo com três atividades básicas: análise, síntese e avaliação.',
      'O BMC é exclusivamente voltado para a estratégia de negócios da empresa, enquanto a UX é focada apenas no design e usabilidade de produtos e serviços.',
      'A UX é responsável apenas pela criação de interfaces visuais, enquanto o BMC se preocupa com o desenvolvimento de todo o modelo de negócios da empresa.'],
      resposta: 0 // A - 1
    },
    {
      id: 39,
      texto: 'Porquê é importante o desenvolvimento de protótipos na IHC?',
      alternativas: ['Protótipos são uma perda de tempo e dinheiro, pois exigem muito esforço para criar e não fornecem valor real para o produto final.',
      'É um processo com três atividades básicas: análise, síntese e avaliação.',
      'Desenvolver protótipos não é importante na IHC, pois os designers podem simplesmente visualizar a interface em suas mentes e criar diretamente o produto final.',
      'Protótipos são úteis apenas para projetos de alta complexidade ou para equipes grandes, mas não são necessários para projetos menores ou para designers individuais.'],
      resposta: 1 // B - 2
    },
    {
      id: 40,
      texto: 'Como a Estrutura de custos é importante no BMC?',
      alternativas: ['A estrutura de custos é irrelevante no BMC, pois o que realmente importa é a proposta de valor e os canais de distribuição.',
      'É possível ignorar completamente a estrutura de custos no BMC, pois os custos podem ser gerenciados à medida que surgirem durante a execução do projeto.',
      'A Estrutura de custos ajuda a definir como a empresa gasta dinheiro e quais são os custos mais importantes para o seu negócio.',
      'A Estrutura de custos é irrelevante no BMC, uma vez que os custos podem ser calculados posteriormente com base nos resultados financeiros da empresa.'],
      resposta: 2 // C - 3
    }
  ];

  perguntasAleatorias: Pergunta[] = [];

  ngOnInit(): void {
    this.perguntasAleatorias = this.perguntas.sort(() => 0.5 - Math.random()).slice(0, 12);
  }
  gerarPerguntas(): void {
    this.perguntasAleatorias = this.perguntas.sort(() => 0.5 - Math.random()).slice(0, 12);
  }
  gerarPerguntas1(): void {
    this.perguntasAleatorias = this.perguntas.sort(() => 0.5 - Math.random()).slice(0, 1);
  }
  verificarRespostas(): void {
    let acertos = 0;
    for (const pergunta of this.perguntasAleatorias) {
      if (typeof pergunta.selectedOption === 'number' && pergunta.resposta === pergunta.selectedOption) {
        acertos++;
      }
    }
    alert(`Você acertou ${acertos} de ${this.perguntasAleatorias.length} perguntas.`);
  }
}
