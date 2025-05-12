// function buscarCep() {
//     let cepValue = document.querySelector('#cep').value;
//     let endereco = document.querySelector('#endere');
//     let bairrO = document.querySelector('#bairro');
//     let cidadE = document.querySelector('#cidade');


//     fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then(res => res.json())
//         .then(res => {
//             console.log(res)
//             endereco.value = res.logradouro
//             bairrO.value = res.bairro
//             cidadE.value = res.localidade
//         })
// }

// function filter_list(l) {
//     let nums = []
//     for (let i = 0; i < l.length; i++) {
//         // console.log(l[i])

//         if (typeof (l[i]) != 'string') {
//             nums.push(l[i])
//         }
//     }
//     return nums
// }
// filter_list([1, 2, 'a', 'b'])



// function isTriangle(a, b, c) {

//     if (((b - c)) < a < (b + c) && (a-c) < b < (a + c) && (a - b) < c < (a + b)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isTriangle(0, 3, 4));



// function countSheeps(sheep) {
//     let numOvelha = 0
//     for (let i = 0; i < sheep.length; i++) {

//         if (sheep[i] == true) {
//             numOvelha += 1
//         }

//     }
//     return numOvelha
// }
// console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));




// function bmi(weight, height) {
//     let calculo = (weight / (height * height))
//     let estado;

//     if (calculo <= 18.5) {
//         estado = 'Underweight'
//     }
//     else if (calculo <= 25.0) {
//         estado = 'Normal'
//     }
//     else if (calculo <= 30.0) {
//         estado = 'Overweight'
//     }
//     else {
//         estado = 'Obese'
//     }
//     console.log(calculo)
//     return estado;
// }
// console.log(bmi(50, 1.80))


// function noSpace(x) {
//     let letras = ''
//     for (let i = 0; i < x.length; i++) {

//         if (x[i] != ' ') {

//             letras += x[i]

//         }
//     }
//     return letras
// }

// function maps(x) {
//     let dobro = [];

//     for (let i = 0; i < x.length; i++) {
//         dobro.push(x[i] * 2)
//     }
//     return dobro

// }
// maps ([1,2,3])



// function getCount(str) {
//     let lista = ['a', 'e', 'i', 'o', 'u']
//     let contador = 0
//     for (let i = 0; i < str.length; i++) {

//         for (let j = 0; j < lista.length; j++) {

//             if (str[i] == lista[j]) {
//                 contador += 1
//             }
//         }

//     }
//     console.log(contador)
// }
// getCount("abracadabra")

// var summation = function (num) {
//     let contador = 0
//     for (let i = 0; i <= num; i++)
//         contador += i

//     return contador
// }
// console.log(summation(8))


// function basicOp(operation, value1, value2) {
//     operation = '+'
//     let calculo;
//     switch (operation) {
//         case '+':
//             calculo = value1 + value2;
//             break;

//         case '-':
//             calculo = value1 + value2;
//             break;

//         case '*':
//             calculo = value1 + value2;
//             break;

//         case '/':
//             calculo = value1 / value2;
//             break;

//     }
//     return `${value1} ${operation} ${value2} = ${calculo}`
// }
// console.log(basicOp('+', 4, 7))

// function likes(names) {
//     let contador = 0
//     if (names.length == 0) {
//         return `no one like this`
//     }
//     else if (names.length == 1) {
//         return `${names[0]} likes this`
//     }
//     else if (names.length == 2) {
//         return `${names[0]} and ${names[1]} like this`
//     }
//     else if (names.length == 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }
//     else if (names.length > 3) {
//         contador = names.length - 2
//         return `${names[0]}, ${names[1]} and  ${contador} like this`
//     }
// }
// console.log(likes([]));



function DNAtoRNA(dna) {
    let dnaa = dna.split('')
    for (let i = 0; i < dna.length; i++) {

        if(dnaa[i] == 'T') {
            dnaa[i] = 'U'
        }
    }
    return dnaa.join('').toUpperCase()
}
console.log(DNAtoRNA('GCAT'));
