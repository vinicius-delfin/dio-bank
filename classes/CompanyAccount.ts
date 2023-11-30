import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
        super(name, accountNumber, balance)
    }

    setLoan = (value: number):void => {
        if (this.getValidate()) {
            this.setBalance(value)
        }
    }

    getDebt = () => {
        return this.getBalance() * 1.48
    }
}