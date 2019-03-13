import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ResumeService } from '../resume.service';
import { Resume } from '../model/resume';

@Component({
  selector: 'zen-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumes: Resume[] = new Array(0);
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResumes();
  }

  getResumes() {
   this.resumeService.list().subscribe(resumes => this.resumes = this.resumes.concat(resumes));
   this.resumeService.listByUser().subscribe(resumes => this.resumes = this.resumes.concat(resumes));
  }

  getBackgroundColor(result: string): string {
    if (+result > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
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
