import { GamePlayService } from './../game-play.service';
// import { AllPlayers } from './../PlayerList';
import { Component, OnInit } from '@angular/core';
import { Player } from '../IPlayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  ListOfPlayers: Player[];
  SelectedPlayer: Player;
  handledEditedPlayer: Player = new Player();
  constructor(private gamePlay: GamePlayService) { }

  ngOnInit(): void {
    // this.ListOfPlayers = AllPlayers;
    // console.log(AllPlayers);
    this.GetListOfPlayers();
  }

  GetListOfPlayers(): void {
    this.gamePlay.ListOfPlayers().subscribe(p => this.ListOfPlayers = p);
  }

  DeletePlayer(id: number): void {
    // this.gamePlay.DeletePlayer(id);
    // this.GetListOfPlayers();
    this.gamePlay.DeletePlayer(id).subscribe(() => {
      // this will update the local list of players to exclude the player who was deleted from the Db
      this.ListOfPlayers = this.ListOfPlayers.filter(p => p.playerId !== id);
    });
  }

  EditPlayer(id: number): void {
    this.SelectedPlayer = this.gamePlay.GetPlayer(id);
  }

  HandleEditPlayer(emittedEditedPlayer: Player): void {
    // try to get the values of the emitted event here
    console.log(emittedEditedPlayer);
    // this.handledEditedPlayer = emittedEditedPlayer as Player;
    // call the service to update that player


    // both of the below methods work to update the list automatically.
    // The first queries the complete list for the Db.
    // The second updates the local list upon completion ot the edit in the Db.

    // Method 1 - requery the list of Players from thue DB
    // this.gamePlay.UpdatePlayer(emittedEditedPlayer).subscribe(() => this.GetListOfPlayers());

    // Method 2 - update hte local list with the updated player details
    this.gamePlay.UpdatePlayer(emittedEditedPlayer).subscribe(() => {
      this.ListOfPlayers.forEach(p => {
        if (p.playerId === emittedEditedPlayer.playerId) {
          p.name = emittedEditedPlayer.name;
          p.wins = emittedEditedPlayer.wins;
          p.losses = emittedEditedPlayer.losses;
        }
      });
    });
  }
}
