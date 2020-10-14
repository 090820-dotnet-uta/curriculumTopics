class Player {
    name: string;
    playerId: number;
    constructor(id: number, name: string) {
        this.name = name;
        this.playerId = id;
    }
};

export { Player };