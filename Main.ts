import { CompanyAccount } from "./CompanyAccount";
import { PeopleAccounts } from "./PeopleAccount";
import { PremiumAccount } from "./PremiumAccount";

const vinicius: PeopleAccounts = new PeopleAccounts('Vinicius Delfin', 1, 1000, 404)
const openai: CompanyAccount = new CompanyAccount('OpenAi', 1, 1000)
const premium: PremiumAccount = new PremiumAccount('Rebecca', 2, 881, 116)


console.log(vinicius.getBalance())
vinicius.deposit(123)
console.log(vinicius.getBalance())
vinicius.withdraw(100)
console.log(vinicius.getBalance())

console.log(openai.getBalance())
openai.setLoan(1000)
console.log(openai.getBalance())
console.log(openai.getDebt())

console.log(premium.getBalance())