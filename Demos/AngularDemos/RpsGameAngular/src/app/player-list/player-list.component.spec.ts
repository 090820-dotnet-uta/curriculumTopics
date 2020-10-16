import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GamePlayService } from '../game-play.service';
import { Player } from '../IPlayer';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async () => {
    const service = jasmine.createSpyObj('GamePlayService', ['ListOfPlayers']);
    const player = new Player('nick', 1, 0, -100);
    service.ListOfPlayers.and.returnValue(of([player]));

    await TestBed.configureTestingModule({
      declarations: [PlayerListComponent, PlayerDetailsStubComponent],
      providers: [{ provide: GamePlayService, useValue: service }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // runs one "change detection cycle" which is how angular updates all the data bindings.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the players', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('li').textContent).toContain('nick');
  });
});

@Component({ selector: 'app-playerdetails' })
class PlayerDetailsStubComponent {}
