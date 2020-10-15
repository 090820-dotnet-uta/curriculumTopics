import { GamePlayService } from './../game-play.service';
import { Player } from './../IPlayer';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  @Input() player: Player;
  playerEditForm: FormGroup;
  name: string;
  playerId: number;
  wins: number;
  losses: number;

  constructor(private GamePlay: GamePlayService) { }

  ngOnInit(): void {
    this.playerEditForm = new FormGroup(
      {
        name: new FormControl(),
        playerId: new FormControl(),
        wins: new FormControl(),
        losses: new FormControl()
      }
    );
    // if (this.player) {
    //   this.GetPlayer();
    // }
  }
  // GetPlayer(): void {
  //   this.player = this.GamePlay.GetPlayer(player.id)
  // }
}
