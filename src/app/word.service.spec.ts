import { Guess } from 'app/models/guess.model';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DatabaseService } from 'app/database.service';
import { firebaseconfig } from './app.module';
import { AngularFireModule } from 'angularfire2';
import { TestBed, inject } from '@angular/core/testing';

import { WordService } from './word.service';
import { Subject } from "rxjs";

describe('WordService', () => {

  const myWords = new Subject();
  const databaseService = {
    words: myWords
  } as DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseconfig)],
      providers: [{ provide: DatabaseService, useValue: databaseService}, WordService]
    });
  });

  fit('should get a guess from the databaseService', inject([WordService], (service: WordService) => {
    expect(service).toBeTruthy();
    myWords.next(['Bertrand']);
    service.guess.subscribe((word: Guess) => {
      expect(word.solution).toBe('Bertrand');
      expect(word.guess).not.toBe('Bertrand');
      expect(word.wordLength).toBe(8);
    });
    service.pickAWord();
  }));
});
