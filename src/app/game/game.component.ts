import { Guess } from './../models/guess.model';
import {
  Component,
  OnInit
} from '@angular/core';

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
  time = 40;

  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {
  }

  public updateScore(guess: Guess) {
    this.score += Math.max(0, Math.floor(Math.pow(1.95, (guess.wordLength / 3))) - (guess.nbTyped - guess.wordLength));
  }
}
