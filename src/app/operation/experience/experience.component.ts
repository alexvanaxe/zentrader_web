import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';   

import * as moment from 'moment';

import { ExperienceService } from './experience.service';
import { Experience } from '../model/experience';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  experience: Experience;
  @Output() onOperationExperiment = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService) {
    this.experience = new Experience();
    //1981-07-23T21:00
    this.experience.date = moment().format("YYYY-MM-DDTHH:mm");
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  stockSelected(stock: Stock) {
    this.experience.stock = stock.pk;
  }

  add() {
    console.log(this.experience.date);
    this.experienceService.add(this.experience).subscribe(experiment => 
      this.onOperationExperiment.emit(experiment));
    this.experience = new Experience();
  }
}
