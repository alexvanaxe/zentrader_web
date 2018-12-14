import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';   

import * as moment from 'moment';

import { ExperienceService } from './experience.service';
import { Experience } from '../model/experience';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  experience: Experience;
  stock: Stock;
  @Output() onOperationExperiment = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService) {
    this.experience = new Experience();
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  stockSelected(stock: Stock) {
    this.stock = stock;
    this.experience.stock =this.stock.pk;
  }

  afterStockAdded(experiment: Experience) {
    this.onOperationExperiment.emit(experiment);
    this.experience.pk = null;
  }

  add() {
    console.log(this.experience);
    this.experienceService.add(this.experience).subscribe(experiment => this.afterStockAdded(experiment), 
      error => this.postOfficerService.deliverMessage("Error on add experiment. Please review your data."));
  }
}
