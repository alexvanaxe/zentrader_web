import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';

@Component({
  selector: 'zen-operations-center',
  templateUrl: './operations-center.component.html',
  styleUrls: ['./operations-center.component.css']
})
export class OperationsCenterComponent implements OnInit {
  experience: Experience;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
   this.experienceService.list().subscribe(result => this.setExperience(result));
  }

  setExperience(experiences: Experience[]) {
    this.experience = experiences[0];
  }

}
