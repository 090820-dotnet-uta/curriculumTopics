import { GamePlayService } from './../game-play.service';
import { Player } from './../IPlayer';
import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnChanges {

  @Input() player: Player;
  playerEditForm: FormGroup;
  name: string;
  playerId: number;
  wins: number;
  losses: number;
  @Output() editedPlayer = new EventEmitter<Player>();

  p1: Player;

  constructor(private GamePlay: GamePlayService) { }

  ngOnChanges(): void {
    if (this.player) {
      this.playerEditForm = new FormGroup(
        {
          name: new FormControl(this.player.name),
          playerId: new FormControl(this.player.playerId),
          wins: new FormControl(this.player.wins),
          losses: new FormControl(this.player.losses)
        }
      );
    }
  }

  UpdatePlayer(): void {
    console.log(`playerEditForm name in child component => ${this.playerEditForm.get('name').value}`);
    console.log(`playerEditForm playerId in child component => ${this.playerEditForm.get('playerId').value}`);
    console.log(`playerEditForm playerId in child component => ${this.playerEditForm.get('wins').value}`);
    console.log(`playerEditForm playerId in child component => ${this.playerEditForm.get('losses').value}`);

    this.p1 = new Player(this.playerEditForm.get('name').value,
      +this.playerEditForm.get('wins').value,
      +this.playerEditForm.get('losses').value,
      +this.playerEditForm.get('playerId').value);

    console.log(` Child/UpdatePlayer. The name of the player to be edited is => ${this.p1.name}. playerId => ${this.p1.playerId}`);

    this.editedPlayer.emit(this.p1);
  }
}
