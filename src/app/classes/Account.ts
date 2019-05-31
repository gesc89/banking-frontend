import { Revenue } from './Revenue';

export class Account {

    id: string
    balance: number;
    revenues: Revenue[];

    constructor(id: string) {

        this.id = id;

    }

    getId(): string {

        return this.id;

    }

    toString(): string {

        return '' + this.id;

    }

}