export class Postalcode {

    id: number;
    zipcode: string
    city: string;
    country: string;

    constructor(zipcode: string, city: string, country: string) {

        this.zipcode = zipcode;
        this.city = city;
        this.country = country;

    }

}