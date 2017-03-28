import { WordService } from './word.service';
import { DatabaseService } from './database.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { WordComponent } from './word/word.component';
import { ROUTES } from './app.routes';
import { HighscoreComponent } from './highscore/highscore.component';

export const firebaseconfig = {
  apiKey: 'AIzaSyAxUtobwZQFfJD07kJwDC7EKMhsOEr7KmM',
  authDomain: 'word-scramble-eeeac.firebaseapp.com',
  databaseURL: 'https://word-scramble-eeeac.firebaseio.com',
  storageBucket: 'word-scramble-eeeac.appspot.com',
  messagingSenderId: '1017160771670'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    WordComponent,
    HighscoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [HighscoreComponent],
  providers: [DatabaseService, WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
