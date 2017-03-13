import { Guess } from './../models/guess.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ws-guess',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss', '../app.component.scss']
})
export class WordComponent implements OnInit{
  toGuess: string;
  solution: string;
  finished: boolean;
  nbTyped: number = 0;

  @Output()
  foundAWord = new EventEmitter<Guess>();

  ngOnInit(): void {
    this.toGuess = 'fonbouf';
    this.solution = 'bouffon';
  }

  evaluateGuess(guess: string): void {
    this.nbTyped++;
    if (guess.toUpperCase() === this.solution.toUpperCase()) {
      this.foundAWord.emit(new Guess(this.nbTyped, this.toGuess.length));
    }
  }
}
