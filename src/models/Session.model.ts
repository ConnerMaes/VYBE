import {Question} from './Qeustion.model';
import {Researcher} from './Researcher.model';
import {Subject} from './Subject.model';

export class Session {
  constructor(public sessionID: number,
              public name: string,
              public password: string,
              public scaleType: string,
              public showPercentage,
              public code: string,
              public startDate: string,
              public endDate: string,
              public isOpen: boolean,
              public isConcept: boolean,
              public subjects?: Subject[],
              public questions?: Question[],
              public researchers?: Researcher[])
  {

  }
}
