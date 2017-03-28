import { HighscoreComponent } from './../highscore/highscore.component';
import { DatabaseService } from './../database.service';
import { Guess } from './../models/guess.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'ws.game'
  selector: 'ws-game',
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './game.component.scss', '../app.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  score = 0;
  time = 1;
  finished = false;
  timerSubscription;

  // TypeScript public modifiers
  constructor(private ngbModal: NgbModal) {}

  public ngOnInit() {
    let timer = Observable.timer(0, 1000);
    this.timerSubscription = timer.subscribe(t => this.tick());
  }

  public updateScore(guess: Guess) {
    this.score += Math.max(0, Math.floor(Math.pow(1.95, (guess.wordLength / 3))) - (guess.nbTyped - guess.wordLength));
  }

  private tick() {
    this.time -= 1;
    if (this.time === 0) {
      this.finished = true;
      this.timerSubscription.unsubscribe();
      this.handleHighscore();
    }
  }

  private handleHighscore() {
    this.ngbModal.open(
      HighscoreComponent,
      { size: 'sm' }
    );
  }

}
