const ArrayWithNumbersWithin = [1, 2, 3, 4, 5]
const ArraysWithoutValues = []
const ArraysWithStringsWithin = ['A', 'B', 'C', 'D', 'E']


function HandleArrayExplanation() {

    // .at()

    console.log(

        `Método .at: \n
        Ao especificar o valor dentro do .at(), ele retorna o item do index especificado. \n 
        Ex: O valor que se encontra no index 2 é ${ArrayWithNumbersWithin.at(2)}
    `

    )

    // .concat()


    console.log(
        `Método .concat: \n
        Válido para a junção de um array com o outro. Precisamos especificar o array que queremos usar e o que será unido a ele. \n
        Ex: ArraysWithStringsWithin.concat(ArrayWithNumbersWithin) \n
        Retorno: ${ArraysWithStringsWithin.concat(ArrayWithNumbersWithin)}
        `
    )

    // .copyWithin()

    console.log(ArrayWithNumbersWithin.copyWithin(0, 1, ArrayWithNumbersWithin.length))


    // .entries()

    // Aqui ele vai retornar uma função.
    console.log(ArraysWithStringsWithin.entries());
    // Aplicamos um loop for...of, e aí esse array vai ficar:
    // Se não usarmos o array em [index, element], ele vai retornar a mesma coisa embaixo.

    // Isso basicamente só funciona com o for loop mesmo. 
    for (const [index, element] of ArraysWithStringsWithin.entries()) {
        console.log(`Esse é o index: ${index} \n elemento/valor ${element}`);
    }


    // .every()

    // Vai retornar um boolean, no parêntese. every verifica se todos os itens do array são iguais.

    // Aqui, checamos se todos os items são iguais a A.
    const ArrayWithSameItems = ['A', 'A', 'A']
    console.log(ArrayWithSameItems.every((item) => item === 'A')); // O esperado é true, pois o array de cima é todo igual.

    // Aqui, vamos checar se todos os números são maiores que 1
    // O esperado é true, pois o 1 que existe no array é igual comparação, e não menor.
    console.log(ArrayWithNumbersWithin.every((item) => item > 1)) // true
    // Vamos checar se todos os números são maiores que 2.
    // O esperado é que retorne false, pois o 1 existe e não é maior que o 1.
    console.log(ArrayWithNumbersWithin.every((item) => item > 2)) // false

    // .fill()

    // Vai retornar um array preenchido pela especificação da função.
    // Seu primeiro parâmetro é a informação que você quer inserir no array
    // O segundo, é em qual index você quer que comece esse preenchimento
    // O terceiro argumento, é a onde você quer que pare o fill.

    // Exemplo 1 - Quero inserir o número 4 começando a partir do último index do meu array.
    console.log(ArrayWithNumbersWithin.fill(4, ArrayWithNumbersWithin.length - 1))

    // Exemplo 2 - Quero inserir a letra A em todos os itens a partir do index 2.
    console.log(ArrayWithNumbersWithin.fill('A', 2))

    // Exemplo 3 - Quero inserir a sílaba CA em todos os itens que ficam entre o index 1 e 4.
    const Array3 = [1, 2, 3, 4, 5, 6, 7]
    console.log(Array3.fill('CA', 1, 4))


    // .filter()

    // Como nome já diz, essa função vai retornar o array original filtrado com as condições que você passar.

    // Exemplo 1 - Quero pegar todos os valores que são maiores que 10.
    // O que se espera é um array vazio. Pois não existe nenhum valor maior que dez em nosso array.
    console.log(Array3.filter(item => item > 10))

    // Exemplo 2 - Quero pegar todos os valores que são menos que 5.
    const ArrayFilter = [1, 2, 3, 4, 5, 6, 7]

    // O que se espera é um array que chegue até o número 4.
    console.log(ArrayFilter.filter(item => item < 5))

    // Exemplo 3 - Em um array de objetos, eu irei filtrar apenas os valores que são equivalentes a números.

    const Objeto = [
        { id: 1, nome: 'Suzei' },
        { id: 2, nome: 'Bea' },
        { id: '32', nome: 'Roberto' },
        { id: 'blue', nome: 'Carlos' },
    ]

    // Retornará objetos que tem apenas números como seu id.
    console.log(Objeto.filter(item => typeof item.id === 'number'))
}