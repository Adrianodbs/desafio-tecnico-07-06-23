Desafio - Fazer um conversor de números romanos para arábicos e vice-versa.
Para a tarefa, considerar apenas números inteiros positivos entre 1 e 3999.

- isValidRoman(roman): Essa função é responsável por validar se uma entrada é um número romano válido. Ela recebe um parâmetro roman, que representa a entrada a ser validada. A função utiliza uma expressão regular (romanPattern) para verificar se o padrão do número romano está correto. Caso a entrada passe na validação, a função retorna true, caso contrário, retorna false.
- romanToArabic(roman): Essa função converte números romanos em números arábicos. Ela recebe como parâmetro 'roman', que é o número romano a ser convertido. A função utiliza um objeto chamado 'romanNumerals' que associa cada símbolo romano ao seu valor arábico correspondente. A função itera sobre cada símbolo do número romano (convertendo-os para maiúsculas para facilitar a comparação) e verifica se o valor atual é maior que o valor anterior. Se for, subtrai duas vezes o valor anterior do valor atual e adiciona ao resultado arábico (arabic). Caso contrário, adiciona apenas o valor atual ao resultado. O valor atual é armazenado em prevValue para ser comparado com o próximo símbolo. No final, a função retorna o número arábico resultante.
- arabicToRoman(arabic): Essa função converte números arábicos em números romanos. Ela recebe como parâmetro 'arabic', que é o número arábico a ser convertido. A função utiliza um array chamado 'arabicNumerals' que contém objetos com pares de valores arábicos e símbolos romanos correspondentes. A função itera sobre cada numeral no array e, enquanto o valor arábico (numeral.value) for menor ou igual ao número arábico fornecido, adiciona o símbolo romano correspondente (numeral.symbol) ao resultado romano e subtrai o valor arábico do número arábico fornecido. Essa etapa é repetida até que o valor arábico seja menor que o valor atual no array. No final, a função retorna o número romano resultante.
- convertArabicToRoman(): Essa função é chamada quando o botão "Converter para Romano" é clicado no HTML. Ela recupera o valor do campo de entrada do número arábico, validando-o para garantir que seja um número válido entre 1 e 3999. Se a validação falhar, exibe uma mensagem de erro no elemento de saída (output). Caso contrário, chama a função arabicToRoman para converter o número arábico em número romano e exibe o resultado no elemento de saída.
- convertRomanToArabic(): Essa função é chamada quando o botão "Converter para Arábico" é clicado no HTML. Ela recupera o valor do campo de entrada do número romano e valida se é um número romano válido. Se a validação falhar, exibe uma mensagem de erro no elemento de saída (output). Caso contrário, chama a função romanToArabic para converter o número romano em número arábico e exibe o resultado no elemento de saída.