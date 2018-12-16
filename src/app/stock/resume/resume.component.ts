import { Component, OnInit, OnChanges, Input } from '@angular/core';  

import { ResumeService } from '../resume.service';
import { Resume } from '../model/resume';

@Component({
  selector: 'zen-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumes: Resume[];
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResumes();
  }

  getResumes() {
   this.resumeService.list().subscribe(resumes => this.resumes = resumes); 
  }

  getBackgroundColor(result: string): string{
    if (+result > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
    }
  }

}
