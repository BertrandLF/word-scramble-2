import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestBed, ComponentFixture, async, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppModule } from '../app.module';

// Load the implementations that should be tested
import { GameComponent } from './game.component';
import { Guess } from 'app/models/guess.model';

describe(`Game`, () => {
  let comp: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  const ngbModal = {} as NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, NgbModal],
    });
    fixture = TestBed.createComponent(GameComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should have a base score of 0', () => {
    expect(comp.score).toEqual(0);
  });

  it('should have a timer set to 40', () => {
    expect(comp.time).toEqual(40);
  });

  it('should update the score on guess', () => {
    comp.updateScore(new Guess(6, 'wombat', 'tambow'));
    expect(comp.score).toBe(3);
  });

  it('should lower the score if the user typed more than required', () => {
    comp.updateScore(new Guess(9, 'wombat', 'tambow'));
    expect(comp.score).toBe(0);
  });

  it('should lower the timer every tick', fakeAsync(() => {
    const gameComponent = new GameComponent(ngbModal);
    gameComponent.ngOnInit();
    expect(gameComponent.time).toEqual(40);
    tick();
    expect(gameComponent.time).toEqual(39);
    tick(1000);
    expect(gameComponent.time).toEqual(38);
    discardPeriodicTasks();
  }));

  it('should set finished to true when the timer reaches 0', fakeAsync(() => {
    const gameComponent = new GameComponent(ngbModal);
    gameComponent.ngOnInit();
    tick(39000);
    expect(gameComponent.time).toEqual(0);
    expect(gameComponent.finished).toBeTruthy;
    discardPeriodicTasks();
  }));

});
