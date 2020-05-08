import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output, OnDestroy } from '@angular/core';

import * as moment from 'moment';
import { Experience } from 'app/operation/model/experience';
import { Stock } from 'app/stock/model/stock';
import { Account } from '../../account/model/account';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { AccountService } from '../../account/account.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit, OnDestroy {
  @Input() experience: Experience;
  @Input() editable: boolean = false;
  @Output() onExperienceChanged = new EventEmitter<Experience>();
  @Output() onStockUpdated = new EventEmitter<Stock>();

  @Output() onToggleEdit = new EventEmitter<boolean>();

  private isToUpdateFavorite: boolean;
  account: Account = new Account();

  constructor(private experienceService: ExperienceService, private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getDefault().subscribe(result => this.account = result);
  }

  ngOnDestroy() {}

  toggleEdit() {
    this.onToggleEdit.emit(true);
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
      const experienceToUpdt = new Experience();
      experienceToUpdt.pk = this.experience.pk;
      experienceToUpdt.favorite = this.experience.favorite;
      this.experienceService.patch(experienceToUpdt).subscribe();
      this.isToUpdateFavorite = false;
    }
  }

  getCostColor(experience: Experience) {
   if (+experience.cost  > +this.account.equity) {
     return 'equity-insuficient';
   }
   return '';
  }
}
