import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'word-guess',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss', '../app.component.scss']
})
export class WordComponent implements OnInit{
  toGuess: string = '';
  finished: boolean = false;

  ngOnInit(): void {
    this.toGuess = 'Bertnard';
  }

  evaluateGuess(guess: string): void {
    console.log(guess);
  }
}
