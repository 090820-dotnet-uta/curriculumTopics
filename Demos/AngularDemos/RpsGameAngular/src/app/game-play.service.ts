import { Injectable } from '@angular/core';
import { AllPlayers } from './PlayerList';
import { Player } from './IPlayer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamePlayService {
  private listOfPlayers: Array<Player>;

  constructor() {
    this.UpdateListOfPlayers();
  }

  UpdateListOfPlayers(): void {
    this.listOfPlayers = AllPlayers;
  }

  ListOfPlayers(): Observable<Array<Player>> {
    // return of(this.listOfPlayers);

  }

  DeletePlayer(id: number): void {
    // filter out the id you want to delete.
    this.listOfPlayers = this.listOfPlayers.filter(p => p.PlayerId !== id);
  }
  GetPlayer(id: number): Player {
    return this.listOfPlayers.find(p => p.PlayerId === id);
  }
}
