import { Component, OnInit } from '@angular/core';
import {ResearcherService} from "../../../services/researcher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  subjects = [];
  selectedSubjectIds = [];

  constructor(private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {
    this.retrieveSubjects();
  }

  getAge(birthDateString: string) {
    const birthDateStringSplit = birthDateString.split('-'); // [0]=day [1]=month [2]=year
    const birthDate = new Date(+birthDateStringSplit[2], +birthDateStringSplit[1], +birthDateStringSplit[0]);
    return new Date().getFullYear() - birthDate.getFullYear();
  }

  retrieveSubjects() {
    this.researcherService.getSubjectsFromResearcher()
      .subscribe(res => {
        this.subjects = res;
      });
  }

  toggleSubject(subjectId) {
    const index = this.selectedSubjectIds.indexOf(subjectId);
    if (index === -1) {
      this.selectedSubjectIds.push(subjectId);
    } else {
      this.selectedSubjectIds.splice(index, 1);
    }
  }

  buttonIsDiabled(): boolean {
    return this.selectedSubjectIds.length === 0;
  }

  selectSubject(subject: any, event: any) {
    const route = 'dashboard/subjects/' + subject.subjectID + '/answers';
    this.router.navigate([route]);
  }
}
