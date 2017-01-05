import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';

export const ROUTES: Routes = [
  { path: '',      component: GameComponent },
  { path: 'highscores',  component: GameComponent },
];
