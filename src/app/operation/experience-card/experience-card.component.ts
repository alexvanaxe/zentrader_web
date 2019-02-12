import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';

import { Experience } from '../model/experience';
import { ExperienceService } from '../experience/experience.service';
import { Stock } from 'app/stock/model/stock';

@Component({
  selector: 'zen-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience;
  @Output() onExperienceChanged = new EventEmitter<Experience>();
  @Output() onStockUpdated = new EventEmitter<Stock>();

  private isToUpdateFavorite: boolean;

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
   return moment(date).fromNow();
  }

  refreshExperience() {
    this.experienceService.get(this.experience.pk).subscribe(result => this.updateExperience(result));
  }

  updateExperience(experience: Experience) {
    Object.assign(this.experience, experience);
    this.onExperienceChanged.emit(this.experience);
  }

  notifyExperimentUpdated(experience: Experience) {
    this.onExperienceChanged.emit(experience);
  }

  updateIntent(experience: Experience) {
    this.experienceService.patch(experience).subscribe();
  }

  notifyStockUpdated(stock: Stock) {
    this.refreshExperience();
    this.onStockUpdated.emit(stock);
  }

  markToUpdate() {
    this.isToUpdateFavorite = true;
  }

  updateFavorite() {
    if (this.isToUpdateFavorite) {
      this.experienceService.patch(this.experience).subscribe();
      this.isToUpdateFavorite = false;
    }
  }
}
