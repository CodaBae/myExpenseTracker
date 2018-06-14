"use strict"

        //objects 
        
const myAcct = {
    name: 'Shalom',
    expenses: 0,
    income:0,
}
//add income
let addIncome =(acct = myAcct, amount =200) => myAcct.income = amount
console.log(addIncome())
//add expenses
let addExpense =(acct = myAcct, amount =50) => myAcct.expenses = amount
console.log(addExpense())
//reset you income and expenses
let resetAcct = (acct = myAcct, iAmount , eAmount ) =>
`${myAcct.income = iAmount} ${myAcct.expenses = eAmount}`
//sum of the acct
 let getSum = (acct = myAcct) => `${myAcct.name} balance is $${myAcct.income - myAcct.expenses}. $${myAcct.income} in income. $${myAcct.expenses} in expenses`

console.log(getSum())
console.log(resetAcct(myAcct,1000,400))
console.log(getSum())