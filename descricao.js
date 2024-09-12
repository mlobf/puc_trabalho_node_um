/*
------------------------------------------------------------------------------
Introdução
------------------------------------------------------------------------------
No Brasil, nenhum avião decola sem um plano de voo aprovado. 
Planos de voo especificam que aeronave irá utilizar quais rotas e aerovias para 
    voar de um ponto a outro do país.  
Dessa forma, garante-se a segurança dos voos, evitando-se que as aeronaves 
    se choquem no ar. 

O objetivo geral deste trabalho é criar um sistema que auxilie os pilotos 
    na montagem de seus planos de voo. 

Para tanto, o sistema deve ser capaz de listar as rotas disponíveis para o 
    deslocamento de um ponto a outro em uma determinada data e horário, além 
    de ser capaz de validar os planos de voo submetidos pelos pilotos. 
    O detalhamento deste contexto, bem como dos requisitos do sistema 
    encontra-se no documento complementar (arquivo “Especificação_Projeto_POO.pdf”). 

Um ponto importante neste projeto é que você aplicará os conteúdos da disciplina 
    para modelar um sistema complexo, utilizando os conceitos de orientação 
    a objetos e implementando a modelagem proposta usando linguagem de 
    programação JavaScript. Entre os conceitos de programação orientada a 
    objetos que devem ser observados, cita-se: encapsulamento e herança. 

Lembre-se que o projeto é individual e está dividido em duas fases. 

Durante a avaliação, serão seguidos os critérios abaixo: 
Códigos que não estejam em JavaScript ou estejam com erros de sintaxe não serão avaliados. 
O programa deve atender aos itens especificados. 
O código de programa deve estar organizado, ser legível e estar comentado. 

Os conceitos de orientação a objetos devem ser seguidos. 

Atenção: seu trabalho deve ser autoral e individual.

------------------------------------------------------------------------------
Primeira Fase
------------------------------------------------------------------------------

Nesta fase, você trabalhará na modelagem da solução e implementação das classes 
    fundamentais a partir da análise do documento complementar 
    (arquivo “Especificação_Projeto_POO.pdf”).  

Nesta etapa, teremos dois entregáveis: 

Implementação das seguintes classes:
    -----Sao 6 Classes base.

    -Piloto

    -ServicoPilotos (capaz de recuperar as informações relativas aos pilotos que 
        podem ser responsáveis pelos voos)
        
    -Hierarquia de classes de Aeronaves (conforme diagrama de classes apresentado 
        no arquivo “Especificação_Projeto_POO.pdf”) 

    -ServicoAeronaves (capaz de recuperar as informações sobre as aeronaves que 
        podem ser utilizadas nos planos de voo)

    -Aerovia

    -ServicoAerovias (capaz de recuperar as informações sobre as aerovias 
        disponíveis para os voos) 

    Exemplo de uso: um programa JavaScript capaz de demonstrar que as classes desenvolvidas 
        e seus métodos funcionam adequadamente. 

O que você deve entregar na fase 1 do projeto: um arquivo “.zip” contendo: 

Todos os arquivos fonte das classes e do exemplo de uso, com instruções para sua execução;

O código organizado em várias classes e legível;

O código comentado em todas as suas classes. 
------------------------------------------------------------------------------
Critérios de Avaliação
------------------------------------------------------------------------------
1-Implementação das classes.
    1.5 - A implementação das classes atende os requisitos estabelecidos e segue os princípios do paradigma de orientação a objetos.
2-Organização e documentação do código.
    0.5 - O código está organizado em várias classes e todas elas estão comentadas.
3-Implementação do exemplo de uso.
    1 - O exemplo de uso executa sem erros e demonstra o funcionamento das classes apresentadas.
------------------------------------------------------------------------------
*/
