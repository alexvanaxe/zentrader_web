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

  ngOnInit() {
    this.experienceService.listNested().subscribe(experiences => this.experiences = experiences);
  }

}
