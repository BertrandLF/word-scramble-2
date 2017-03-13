import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'game'
  selector: 'game',  // <game></game>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './game.component.scss', '../app.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {
    console.log('hello `Game` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
