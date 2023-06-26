const price = 45
const creditCard = 38
let cash = 52
const discount = 5
const transactionStatus = "Transaction Successful: "
console.log(transactionStatus + (((price - discount) <= creditCard) || (cash >= (price - discount))))