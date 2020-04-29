import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

import { ResumeService } from '../resume.service';
import { Resume } from '../model/resume';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {

  resumes: Resume[] = new Array(0);
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResumes();
  }

  ngOnDestroy() {}

  getResumes() {
   this.resumes = new Array(0);
   this.resumeService.list().subscribe(resumes => this.resumes = this.resumes.concat(resumes));
   // this.resumeService.listByUser().subscribe(resumes => this.resumes = this.resumes.concat(resumes));
  }

  getCardClass(result: string): string {
    if (+result > 0) {
      return 'zen-card-gain';
    } else {
      return 'zen-card-lose';
    }
  }

  getBorderColor(owner: string): string {
    if (owner) {
      return 'green';
    } else {
      return '#47A8FF';
    }
  }

}
