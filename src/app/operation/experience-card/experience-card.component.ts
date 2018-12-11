import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import * as moment from 'moment';

import { Experience } from '../model/experience';
import { ExperienceService } from '../experience/experience.service';

@Component({
  selector: 'zen-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience;

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
   return moment(date).fromNow();
  }

  updateIntent(experience: Experience) {
    this.experienceService.patch(experience).subscribe(result => this.experience = result);
  }

  updateFavorite() {
    this.experienceService.patch(this.experience).subscribe();
  }
}
