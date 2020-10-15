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
    this.gamePlay.DeletePlayer(id);
    this.GetListOfPlayers();
  }

  EditPlayer(id: number): void {
    this.SelectedPlayer = this.gamePlay.GetPlayer(id);

  }
}
