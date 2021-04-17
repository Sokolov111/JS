// 1
// let num1 = 10
// let num2 = 10
// while (num1 <= 20 || num2 <= 20) {
//     document.write(`${num1}+${num2}`)
//     num1++
//     num2++
// }


// 2
// let num =0
// for (let i = 54; i <= 234; i++) {

//     num+=i
// }
// document.write(`${num}`)

// 3
// let num1 = 24
// while (num1 <= 97) {
//     if (num1 % 2 == 0) {
//         document.write(`<p>Чет:${num1}</p></p>`)
//     } else {
//         document.write(`<p>Не чет:${num1}</p></p>`)
//     }
//     num1++
// }

// 4
// let counti = 6
// let first = 1
// let sec = 2

// for (let o = 0; o < counti; o++) {
//     document.write(`${first + sec}`)
//     let temp = first
//     first = sec
//     sec = temp + first
// }

let a = +prompt('enter')
let b = +prompt('Enter')
let c = prompt('ENter')
if (c == '+') {
    document.write(`${a+b}`)
} else if (c == '-') {
    document.write(`${a-b}`)
} else if (c == '*') {
    document.write(`${a*b}`)
} else if (c == '/') {
    document.write(`${a/b}`)
} else if (c == '-1') {
    document.write('stopped')

}