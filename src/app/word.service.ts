import { Observable } from 'rxjs/Rx';
import { Guess } from 'app/models/guess.model';
import { DatabaseService } from 'app/database.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from '@angular/core/src/facade/async';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class WordService {

  wordList: string[];
  guess: ReplaySubject<Guess> = new ReplaySubject(1);

  constructor(private db: DatabaseService) {
    this.db.words.subscribe(words => {
      this.wordList = words;
      this.guess.next(this.pickAWord());
    });
  }

  public pickAWord() {
    // firebaseArray starts at 1, so use ceil
    const index = Math.ceil(this.wordList.length * Math.random());
    const currentWord = this.wordList[index];
    return new Guess(
      currentWord.length,
      currentWord,
      this.scramble(currentWord)
    );
  }

  private scramble(word: string) {
    function randomSort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    const scrambled = word.split('').sort(randomSort).join('').toUpperCase();
    console.log('FINALLY', scrambled);
    return word.toUpperCase() !== scrambled ? scrambled : this.scramble(word);
  }
}
