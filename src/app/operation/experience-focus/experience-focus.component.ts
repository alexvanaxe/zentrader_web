import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../experience/experience.service';
import {Experience, ExperienceNested} from '../model/experience';

@Component({
  selector: 'zen-experience-focus',
  templateUrl: './experience-focus.component.html',
  styleUrls: ['./experience-focus.component.css']
})
export class ExperienceFocusComponent implements OnInit {

  experiences: ExperienceNested[];

  constructor(private experienceService: ExperienceService) { }

  retrieveExperiments() {
    this.experienceService.listNested().subscribe(experiences => this.experiences = experiences);
  }

  ngOnInit() {
    this.retrieveExperiments();
  }

  edit(experienceNested: Experience) {
    experienceNested.operation = null;
    /* TODO: Sending the wrong object */
    this.experienceService.patch(experienceNested).subscribe(experience => this.retrieveExperiments());
  }


}
