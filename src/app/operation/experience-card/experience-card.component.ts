import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';

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
  @Output() onExperienceChanged = new EventEmitter<Experience>(); 

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
   return moment(date).fromNow();
  }

  updateExperiment() {
    this.experienceService.get(this.experience.pk).subscribe(result => this.onExperienceChanged.emit(result));
  }

  updateIntent(experience: Experience) {
    this.experienceService.patch(experience).subscribe(result => this.experience = result);
  }

  updateFavorite() {
    this.experienceService.patch(this.experience).subscribe();
  }
}
