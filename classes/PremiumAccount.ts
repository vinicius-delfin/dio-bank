import { PeopleAccounts } from "./PeopleAccount";

export class PremiumAccount extends PeopleAccounts{
    constructor(name: string, accountNumber: number, balance: number, doc_id: number) {
        super(name, accountNumber, balance, doc_id)
        this.setBalance(10)
    }
}