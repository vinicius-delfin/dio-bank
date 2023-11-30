import { DioAccount } from "./DioAccount";

export class PeopleAccounts extends DioAccount {
    private doc_id: number

    constructor(name: string, accountNumber: number, balance: number, doc_id: number) {
        super(name, accountNumber, balance)
        this.doc_id = doc_id
    }
}