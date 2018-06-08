import { Component, OnInit } from '@angular/core';

import { ExperienceService } from 'app/operation/experience/experience.service';
import { Experience } from 'app/operation/model/experience';

@Component({
  selector: 'zen-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.retrieveExperiences();
  }

  retrieveExperiences() {
    this.experienceService.list().subscribe(experiences => this.experiences = experiences);
  }
}
