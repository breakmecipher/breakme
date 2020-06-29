Como a cifra funciona?

Todo o conceito é muito simples, vamos ver um exemplo: Primeiro, pegue um conjunto de qualquer coisa (por exemplo, os 8 ases
cartas de dois baralhos).
Agora, você deseja embaralhar essas cartas para fazer isso de duas maneiras: aleatoriamente ou criar
um padrão para isso. Vamos criar um padrão!
Dê um nome para cada Ases: Ace1, Ace2, Ace3, Ace4, Ace5, Ace6, Ace7, Ace8. Imagine estes cartões
na tabela em uma linha e siga as etapas:
1: escolha um número entre 1 e 8; (4);
   // Todo o número escolhido representará a posição do ás na linha (aqui a primeira posição é 1).
2: remova o cartão da posição escolhida e coloque-o em uma nova linha e observe sua posição;
    (Ace1, Ace2, Ace3, Ace5, Ace6, Ace7, Ace8), (4), (Ace4)
3: escolha um novo número entre 1 e 7 (porque agora a sequência principal tem apenas 7 cartas); (2)
4: altere o cartão escolhido pelo cartão na primeira posição e anote sua posição;
    (Ace2, Ace1, Ace3, Ace5, Ace6, Ace7, Ace8), (2);
    // se o número escolhido foi 1, observe-o.
    // Volte para a etapa 1 até ter metade dos cartões na linha principal.

1: número de escolha (entre 1 e 7) (2);
2: (Ace2, Ace3, Ace5, Ace6, Ace7, Ace8), (4, 2), (Ace4, Ace1)
3: número de escolha (entre 1 e 6) (2);
4: (Ace3, Ace2, Ace5, Ace6, Ace7, Ace8), (2, 2)

1: número de escolha (entre 1 e 6) (6);
2: (Ace3, Ace2, Ace5, Ace6, Ace7), (4, 2, 6), (Ace4, Ace1, Ace8)
3: número de escolha (entre 1 e 5) (4);
4: (Ace6, Ace2, Ace5, Ace3, Ace7), (2, 2, 4)

1: número de escolha (entre 1 e 5) (1);
2: (Ace2, Ace5, Ace3, Ace7), (4, 2, 6, 1), (Ace4, Ace1, Ace8, Ace6)
3: número de escolha (entre 1 e 4) (3);
4: (Ace3, Ace5, Ace2, Ace7), (2, 2, 4, 3);

Agora coloque todos os ases juntos, seguindo a sequência que você tem nas últimas etapas 2 e 4:
    (Ace3, Ace5, Ace2, Ace7, Ace4, Ace1, Ace8, Ace6); Shuffle! ;)
    // Tente, por exemplo, iniciar o processo com esta nova sequência e antes de pedir a um amigo que descubra



Como descobrir a sequência inicial?

Primeiro você precisa da sequência real:
    (Ace3, Ace5, Ace2, Ace7, Ace4, Ace1, Ace8, Ace6)
Segundo, saiba os números das posições removidas e alteradas:
    (4, 2, 6, 1) - Removido!
    (2, 2, 4, 3) - Alterado!

Comece dividindo a nova sequência em duas, para obter as mesmas listas que você tinha nas últimas etapas 2 e 4:
    Parte 1 - (Ace3, Ace5, Ace2, Ace7)
    Parte 2 - (Ace4, Ace1, Ace8, Ace6)
    // Agora você tem duas listas

Agora você está pronto para descobrir a sequência! ;)

Siga os passos:

1: obtém o último valor na lista de posições alteradas; (3)
2: use a lista Parte 1 e troque o cartão na posição pela primeira;
    (Ace2, Ace5, Ace3, Ace7)
3: obtém o último valor na lista de posições removidas; (1)
4: obtenha o último Ás da Parte 2 (Ace6) e insira-o na posição correlacionada na lista Parte 1:
    (Ace6, Ace2, Ace5, Ace3, Ace7)
    // Volte para a etapa 1 e continue usando os valores do último ao primeiro. Das notas de posições
    // e a lista Prt 2

1: (4)
2: (Ace3, Ace2, Ace5, Ace6, Ace7)
3: (6), (Ace8)
4: (Ace3, Ace2, Ace5, Ace6, Ace7, Ace8)

1: (2)
2: (Ace2, Ace3, Ace5, Ace6, Ace7, Ace8)
3: (2), (Ace1)
4: (Ace2, Ace1, Ace3, Ace5, Ace6, Ace7, Ace8)

1: (2)
2: (Ace1, Ace2, Ace3, Ace5, Ace6, Ace7, Ace8)
3: (4), (Ace4)
4: (Ace1, Ace2, Ace3, Ace4, Ace5, Ace6, Ace7, Ace8); Feito :)

Algumas notas:
- Você pode fazer o processo com outra quantidade de itens;
- Você pode usar um número par em vez de um ímpar;
- Você pode fazer o processo até que seja possível remover e alterar os valores ou util que você foi;
- Se você pretende ter tamanhos diferentes para as partes 1 e 2, lembre-se disso quando fizer o
    processo reverso;

Espero que você entenda a idéia básica. (:

O BreakMe usa um conjunto de dados de 24 binários (24 bits) para codificar um texto simples.
Cada grupo de 24 bits é codificado com uma chave diferente.
O texto cifrado é codificado para Base64. Digite com um texto Base64 seja decifrado.






----------------------------------------------------------------------------
How the cipher works?

The whole concept is very simple, let's see a example: First get a set of any thing(ex. the 8 aces 
cards of two decks).
Now you'd like shuffle this cards, so you can do this of two ways: randomlly or create
a pattern for this. Let's create a pattern!
Give a name for each Aces: Ace1, Ace2, Ace3, Ace4, Ace5, Ace6, Ace7, Ace8. Imagene this cards 
in the table in a row, and follow the steps:
1: choice a number betwen 1 and 8; (4); 
   // All choiced number will represent the position of the Ace in the row (here first position is 1).
2: remove the card from the choiced position and put it in a new row and note your position;
    (Ace1, Ace2, Ace3, Ace5, Ace6, Ace7, Ace8), (4), (Ace4)
3: choice a new number betwen 1 and 7 (because now the main sequence have just 7 cards); (2);
4: change the choiced card by the card in the first position and note your position;
    (Ace2, Ace1, Ace3, Ace5, Ace6, Ace7, Ace8), (2);
    // if the choiced number was 1, just note it.
    // Back to step 1 until have half of the cards in the main row.

1: choice number (betwen 1 and 7) (2);
2: (Ace2, Ace3, Ace5, Ace6, Ace7, Ace8), (4, 2), (Ace4, Ace1)
3: choice number (betwen 1 and 6) (2);
4: (Ace3, Ace2, Ace5, Ace6, Ace7, Ace8), (2, 2)

1: choice number (betwen 1 and 6) (6);
2: (Ace3, Ace2, Ace5, Ace6, Ace7), (4, 2, 6), (Ace4, Ace1, Ace8)
3: choice number (betwen 1 and 5) (4);
4: (Ace6, Ace2, Ace5, Ace3, Ace7), (2, 2, 4)

1: choice number (betwen 1 and 5) (1);
2: (Ace2, Ace5, Ace3, Ace7), (4, 2, 6, 1), (Ace4, Ace1, Ace8, Ace6)
3: choice number (betwen 1 and 4) (3);
4: (Ace3, Ace5, Ace2, Ace7), (2, 2, 4, 3);

Now put all Aces together follow the sequence you have in the last step 2 and 4: 
    (Ace3, Ace5, Ace2, Ace7, Ace4, Ace1, Ace8, Ace6); Shuffle! ;)
    // Try for example start the process with this new sequence and before ask for a friend find out it



How to discover the initial sequence?

First you need the actual sequence: 
    (Ace3, Ace5, Ace2, Ace7, Ace4, Ace1, Ace8, Ace6)
Second, know the numbers of the removed and changed positions: 
    (4, 2, 6, 1) - Removed!
    (2, 2, 4, 3) - Changed!

Start by split the new sequence in two, to get the same lists you had in the last step 2 and 4:
    Part 1 - (Ace3, Ace5, Ace2, Ace7)
    Part 2 - (Ace4, Ace1, Ace8, Ace6)
    // Now you have two lists

Now you are ready to discover the sequence! ;)

Follow the steps: 

1: get the last value in the list of changed positions; (3)
2: use the list Part 1 and change the card in the position by the first;
    (Ace2, Ace5, Ace3, Ace7)
3: get the last value in the list of removed positions; (1)
4: get the last Ace of Part 2 (Ace6) and insert it in the correlateded position inside list Part 1:
    (Ace6, Ace2, Ace5, Ace3, Ace7)
    // Back to step 1, and continue use the values from the last to first. From the positions notes 
    // and the Prt 2 list

1: (4)
2: (Ace3, Ace2, Ace5, Ace6, Ace7)
3: (6), (Ace8)
4: (Ace3, Ace2, Ace5, Ace6, Ace7, Ace8)

1: (2)
2: (Ace2, Ace3, Ace5, Ace6, Ace7, Ace8)
3: (2), (Ace1)
4: (Ace2, Ace1, Ace3, Ace5, Ace6, Ace7, Ace8)

1: (2)
2: (Ace1, Ace2, Ace3, Ace5, Ace6, Ace7, Ace8)
3: (4), (Ace4)
4: (Ace1, Ace2, Ace3, Ace4, Ace5, Ace6, Ace7, Ace8); Done :)

Some notes:
- You can do the process with other amount of items;
- You can use a even number insted a odd;
- You can do the process until be possible remove and change the values or util you went;
- If you pretends have diferents sizes for Part 1 and Part 2 you need keep this in mind when do the
    reverse process;

I hope you get the basic idea. (:

The BreakMe use a set of 24 binaries (24bits) data to cipher a simple text.
Each group of 24bits is cipher with a diferent key.
The ciphered text is encode to Base64. Enter with a Base64 text do be decipher.