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
    // This provokes an error. The ideal is to resolve this shit of nested and non nested
    experienceNested.operation = null;

    /* TODO: Sending the wrong object on purpose! its not a bug... yet*/
    this.experienceService.patch(experienceNested).subscribe(experience => this.retrieveExperiments());
  }

  delete(experienceNested: Experience) {
    /* TODO: Sending the wrong object on purpose! its not a bug... yet*/
    this.experienceService.delete(experienceNested).subscribe(result => this.retrieveExperiments());
  }
}
