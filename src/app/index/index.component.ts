import { Component, OnInit, OnDestroy } from '@angular/core';

import { ExperienceService } from 'app/operation/experience/experience.service';
import { Experience } from 'app/operation/model/experience';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.retrieveExperiences();
  }

  ngOnDestroy() {}

  retrieveExperiences() {
    this.experienceService.list().subscribe(experiences => this.experiences = experiences);
  }
}
