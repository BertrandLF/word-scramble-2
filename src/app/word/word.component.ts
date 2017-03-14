import { DatabaseService } from 'app/database.service';
import { Guess } from 'app/models/guess.model';
import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { WordService } from 'app/word.service';

@Component({
  selector: 'ws-guess',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss', '../app.component.scss']
})
export class WordComponent implements OnInit, OnDestroy {
  guessWord: Guess;
  nbTyped: number = 0;
  guessSubscription;
  @Input()
  finished: boolean;

  @Output()
  foundAWord = new EventEmitter<Guess>();

  constructor(private ws: WordService) {}

  ngOnInit(): void {
    this.guessSubscription = this.ws.guess.subscribe(guess => {
      this.guessWord = guess;
    });
  }

  evaluateGuess(guess: string): void {
    this.nbTyped++;
    if (guess.toUpperCase() === this.solution().toUpperCase()) {
      this.foundAWord.emit(new Guess(this.nbTyped, this.solution()));
      this.nbTyped = 0;
    }
  }

  solution() {
    return this.guessWord.solution;
  }

  ngOnDestroy(): void {
    if (this.guessSubscription) {
      this.guessSubscription.unsubscribe();
    }
  }
}
