Desafio: Ciar uma calculadora capaz de dividir a conta de um estabelecimento para cada cliente considerando somente o consumido por cada um. Considerar que a calculadora somente faz a divisão de uma conta por vez.

- addExpense: É uma função que é chamada quando o botão "Adicionar Despesa" é clicado. Ela cria um objeto de despesa com o nome e o valor total calculado com base nos valores de cerveja, sobremesa, vinho, água e janta selecionados. Em seguida, adiciona a despesa à lista de despesas e limpa os campos de entrada.

- calculateTotalValue: É uma função que recebe os valores de cerveja, sobremesa, vinho, água e janta como parâmetros e retorna o valor total da despesa. Ela calcula o valor total de cada item multiplicando sua quantidade pelo seu valor unitário e soma todos os valores. Em seguida, calcula a taxa de serviço (10% do valor total) e adiciona-a ao valor total. O resultado final é retornado.
