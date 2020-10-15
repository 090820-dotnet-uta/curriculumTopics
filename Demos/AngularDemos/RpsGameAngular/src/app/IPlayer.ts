export class Player {
  name: string;
  wins: number;
  losses: number;
  playerId: number;
  constructor(Name: string = '', Wins: number = 0, Losses: number = 0, PlayerId: number = -1) {
    this.name = Name;
    this.wins = Wins;
    this.losses = Losses;
    this.playerId = PlayerId;
  }
}
