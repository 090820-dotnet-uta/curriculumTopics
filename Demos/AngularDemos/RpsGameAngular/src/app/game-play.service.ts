import { Injectable } from '@angular/core';
import { AllPlayers } from './PlayerList';
import { Player } from './IPlayer';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GamePlayService {
  private listOfPlayers: Array<Player>;
  private url = 'https://localhost:5001/api/game/';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {
    this.UpdateListOfPlayers();
  }

  UpdateListOfPlayers(): void {
    // this is ONLY for setup of the component in development
    // this.listOfPlayers = AllPlayers;
    this.ListOfPlayers().subscribe(p => this.listOfPlayers = p);
  }

  ListOfPlayers(): Observable<Array<Player>> {
    // return of(this.listOfPlayers);
    // return this.http.get<Array<Player>>(`${this.url}PlayerList`);
    return this.http.get<Array<Player>>(`${this.url}PlayerList`);

  }

  DeletePlayer(id: number): Observable<void> {
    // filter out the id you want to delete.
    // this.listOfPlayers = this.listOfPlayers.filter(p => p.playerId !== id);
    return this.http.delete<void>(`${this.url}DeletePlayer/${id}`);
  }

  GetPlayer(id: number): Player {
    return this.listOfPlayers.find(p => p.playerId === id);
  }

  UpdatePlayer(p: Player): Observable<void> {
    return this.http.put<void>(`${this.url}EditPlayer`, p, this.options);
  }
}
