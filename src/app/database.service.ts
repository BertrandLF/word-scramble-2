import { Injectable } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  words: Observable<string[]>;

  constructor(af: AngularFire) {
    this.words = af.database.list('words').map(words => {
      return words.map(word => {
        return word.$value;
      });
    });
  }

}
