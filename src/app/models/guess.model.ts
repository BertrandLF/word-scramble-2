export class Guess {

  public nbTyped: number;
  public solution: string;
  public guess: string;
  public wordLength: number;

  constructor(nbTyped = 0, solution = '', guess = '') {
    this.wordLength = solution.length;
    this.solution = solution;
    this.guess = guess;
    this.nbTyped = 0;
  }
}
