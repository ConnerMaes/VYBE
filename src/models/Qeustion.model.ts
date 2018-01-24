import {Answer} from './Answer.model';

export class Question {
  constructor(public questionID: number, public questionText: string, public upperValue: string, public lowerValue: string, public answers?: Answer[]) {

  }
}
