export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number
    private status: boolean = false

    constructor(name: string, accountNumber: number, balance: number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
    }

    getName = (): string => {
        return this.name
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (balance: number) => {
        this.balance += balance
    }

    deposit = (value: number): void => {
        if (this.validate()) {
            this.balance += value
        }
    }

    private validate = (): boolean => {
        return this.status

        
    }

    getValidate = (): boolean => {
        return this.validate()
    }

    withdraw = (value: number): void => {
        if (!this.haveMoney(value)) {
            this.balance -= value
        }
    }

    private haveMoney = (value: number): boolean => {
        return value > this.balance
    }
}