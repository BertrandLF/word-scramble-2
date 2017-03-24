import { Observable } from 'rxjs/Rx';
import { Guess } from 'app/models/guess.model';
import { DatabaseService } from 'app/database.service';
import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class WordService {

  wordList: string[];
  guess: ReplaySubject<Guess> = new ReplaySubject(1);

  constructor(private db: DatabaseService) {
    this.db.words.subscribe(words => {
      this.wordList = words;
      this.pickAWord();
    });
  }

  public pickAWord() {
    const index = Math.floor(this.wordList.length * Math.random());
    const currentWord = this.wordList[index];
    this.guess.next(
      new Guess(
        currentWord.length,
        currentWord,
        this.scramble(currentWord)
      ));
  }

  private scramble(word: string) {
    function randomSort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    const scrambled = word.split('').sort(randomSort).join('').toUpperCase();
    return word.toUpperCase() !== scrambled ? scrambled : this.scramble(word);
  }
}
