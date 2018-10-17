export class Fridge {

    id: string;
    name: string;
    description: string;

    constructor(data: Fridge) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
    }
}
