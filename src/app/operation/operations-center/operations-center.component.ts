import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { Buy } from '../model/buy';

@Component({
  selector: 'zen-operations-center',
  templateUrl: './operations-center.component.html',
  styleUrls: ['./operations-center.component.css']
})
export class OperationsCenterComponent implements OnInit {
  experience: Experience;
  buy: Buy;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
   this.experienceService.list().subscribe(result => this.setExperience(result));
  }

  setExperience(experiences: Experience[]) {
    this.experience = experiences[0];
    this.buy = this.experience.buydata_set[0];
  }

  updateExperience(experience: Experience) {
    this.experience = experience;
  }

}
