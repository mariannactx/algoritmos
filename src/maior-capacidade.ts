// Contêiner com a Maior Capacidade de Água

// Você recebe um array de números inteiros chamado height, de comprimento n.
// Existem n linhas verticais

// Seu objetivo é encontrar duas linhas que, juntamente com o eixo x, formem um contêiner capaz de armazenar a maior quantidade de água possível.

// Retorne a quantidade máxima de água que o contêiner pode armazenar.

// Observação: O contêiner deve permanecer reto (não pode estar inclinado).

// height = [1,8,6,2,5,4,8,3,7]

// maiorArea = area ja calculada

// 1,8 8,7
// distanciaIndexes = 7
// alturaDoMenor = 7
// area = 49
// maiorArea = 49

// 1,8 7,3
// distanciaIndexes = 6
// alturaDoMenor = 3
// area = 18
// maiorArea = 40

// 1,8 6,8
// distanciaIndexes = 5
// alturaDoMenor = 8
// area = 40
// maiorArea = 40

// 1,8 5,4
// distanciaIndexes = 4
// alturaDoMenor = 4
// area = 16
// maiorArea = 16

// 1,8 4,5
// distanciaIndexes = 3
// alturaDoMenor = 5
// area = 15
// maiorArea = 15

// 1,8 3,2
// distanciaIndexes = 2
// alturaDoMenor = 2
// area = 4
// maiorArea = 8

// 1,8 2,6
// distanciaIndexes = 1
// alturaDoMenor = 6
// area = 6
// maiorArea = 8

// maiorArea = 8

// maiorArea = 7

// maiorArea = 6

// 0,1 5,4
// distanciaIndexes = 5
// alturadoMenor = 1
// area = 5
// maiorArea = 5

// 0,1 4,5
// distanciaIndexes = 4
// alturaDoMenor = 1
// area = 4
// maiorArea = 4

// 0,1 3,2
// distanciaIndexes = 3
// alturaDoMenor = 1
// area = 3
// maiorArea = 3

// 0,1 2,6
// distanciaIndexes = 2
// alturaDoMenor = 1
// area = 2
// maiorArea = 2

// 0,1 1,8
// distancia do indexes x altura do maior = area
// distanciaIndexes = 1
// alturaDoMenor = 1
// area = 1
// maiorArea = 1

//

function maiorCapacidade(height: number[]): number {
  let p1 = 0;
  let p2 = height.length - 1;

  let maiorArea = 0;
  while (p1 < p2) {
    const menorLado = height[p1] < height[p2] ? height[p1] : height[p2];
    const area = (p2 - p1) * menorLado;

    maiorArea = area > maiorArea ? area : maiorArea;

    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maiorArea;
}
