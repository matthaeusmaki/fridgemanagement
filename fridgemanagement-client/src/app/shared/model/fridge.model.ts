export class Fridge {

    id: string;
    name: string;
    description: string;

    constructor(data: Fridge = { id: undefined, name: "", description: ""}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
    }
}
