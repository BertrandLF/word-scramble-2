import { DatabaseService } from 'app/database.service';
import { firebaseconfig } from './app.module';
import { AngularFireModule } from 'angularfire2';
import { TestBed, inject } from '@angular/core/testing';

import { WordService } from './word.service';

describe('WordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseconfig)],
      providers: [DatabaseService, WordService]
    });
  });

  it('should ...', inject([WordService], (service: WordService) => {
    expect(service).toBeTruthy();
  }));
});
