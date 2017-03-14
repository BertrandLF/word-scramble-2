/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';

import { AppModule } from '../app.module';
import { WordComponent } from './word.component';

describe('WordComponent', () => {
  let component: WordComponent;
  let fixture: ComponentFixture<WordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the guess if it is a match and reset nbTyped', () => {
    let foundWord = false;
    component.foundAWord.subscribe((guess) => {
      foundWord = true;
    });
    component.solution = 'skidoo';
    component.evaluateGuess('skidoo');
    expect(component.nbTyped).toBe(0);
    expect(foundWord).toBeTruthy;
  });

  it('should not emit the guess if it is not a match, increase nbTyped', () => {
    let foundWord = false;
    component.foundAWord.subscribe((guess) => {
      foundWord = true;
    });
    component.solution = 'skidoo';
    component.evaluateGuess('skidol');
    expect(component.nbTyped).toBe(1);
    expect(foundWord).toBeFalsy;
  });
});
