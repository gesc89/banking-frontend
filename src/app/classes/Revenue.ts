export class Revenue {

    id: number;
    value: number;
    date: Date;
    usage: string;
    receiverAccountId: string;
    transfererAccountId: string;
    accountingStatus: string

    constructor(value: number, usage: string, receiverAccountId: string, 
                transfererAccountId: string, accountingStatus: string) {

        this.value = value;
        this.date = new Date();
        this.usage = usage;
        this.receiverAccountId = receiverAccountId;
        this.transfererAccountId = transfererAccountId;
        this.accountingStatus = accountingStatus;

    }

}