import { Player } from './PlayerClass';
import { TallPlayer } from './TallPlayerClass';

//instantiate a player
let p1 = new Player(3, 'Mark');
let tp1 = new TallPlayer(4, 'Matt', 188)

//declare a funciton
function PlayerFunc(player: TallPlayer): string {
    console.log(player.name);
    if (!player.height) {
        player.height = 5;//assigns height to the parent Player obj?  
    }
    console.log(`${player.name} height is ${player.height}`);
    let doubleId: number = player.playerId * 2;
    console.log(doubleId);
    return `${player.name}, welcome to the jungle.`
}

//call the function
let response = PlayerFunc(p1);
let response1 = PlayerFunc(tp1);
console.log(response);




















// //declare a class called player
// class Player {
//     name: string;
//     playerId: number;
//     constructor(id: number, name: string) {
//         this.name = name;
//         this.playerId = id;
//     }
// };

// class TallPlayer extends Player {
//     height: number;
//     constructor(id: number, name: string, height: number) {
//         super(id, name);
//         this.height = height;
//     }
// };

// //instantiate a player
// let p1 = new TallPlayer(3, 'TallMark', 5);

// //declare a funciton
// function PlayerFunc(player: TallPlayer): string {
//     console.log(player.name);
//     player.height = 5;
//     console.log(player.height);
//     let doubleId: number = player.playerId * 2;
//     console.log(doubleId);
//     return player.name + ', welcome to the jungle';
// }

// //call the function
// let resp: string = PlayerFunc(p1);
// console.log(resp);