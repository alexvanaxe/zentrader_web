import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output, OnDestroy } from '@angular/core';

import * as moment from 'moment';
import { Experience } from 'app/operation/model/experience';
import { Stock } from 'app/stock/model/stock';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit, OnDestroy {
  @Input() experience: Experience;
  @Output() onExperienceChanged = new EventEmitter<Experience>();
  @Output() onStockUpdated = new EventEmitter<Stock>();

  private isToUpdateFavorite: boolean;

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

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
