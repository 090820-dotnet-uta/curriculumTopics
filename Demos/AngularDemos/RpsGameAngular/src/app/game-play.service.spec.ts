import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

import { GamePlayService } from './game-play.service';

describe('GamePlayService', () => {
  let service: GamePlayService;
  let http: any;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(GamePlayService);

    // unit testing: isolate the test subject from its dependencies.
    // you set up fake/stub/mock/double dependencies that have simple behavior,
    //    just enough to test the actual test subject

    http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(of([])); // tells the spy object what "get()" should return.

    // let http = {
    //   recordOfParameters: [],
    //   get(param) {
    //     this.recordOfParameters.append(param);
    //     return of([]); // observable with empty array of players
    //   }
    // } as unknown as HttpClient;

    service = new GamePlayService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch list of players', (done) => {
    service = new GamePlayService(http);

    service.ListOfPlayers().subscribe(players => {
      expect(players).toEqual(jasmine.any(Array));
      expect(players.length).toBe(0);
      expect(http.get).toHaveBeenCalledWith(
        'https://localhost:5001/api/game/PlayerList'
      );
      done();
    });
  });
});
