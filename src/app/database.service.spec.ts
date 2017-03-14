import { firebaseconfig } from './app.module';
import { AngularFire, AngularFireModule } from 'angularfire2';
import { TestBed, inject } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseconfig)],
      providers: [DatabaseService, AngularFire]
    });
  });

  it('should ...', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
