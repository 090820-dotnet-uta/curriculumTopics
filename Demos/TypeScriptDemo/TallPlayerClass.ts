import { Player } from './PlayerClass';


export class TallPlayer extends Player {
    height?: number
    constructor(id: number, name: string, height: number) {
        super(id, name);
        this.height = height;
    }
};