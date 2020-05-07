import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';
import { Stock } from 'app/stock/model/stock';
import { Experience } from 'app/operation/model/experience';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { PostOfficerService } from 'app/postoffice/post-officer-service.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experience: Experience;
  stock: Stock;
  @Input() stockInput: Stock;
  @Output() onOperationExperiment = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService) {
    this.experience = new Experience();
    this.stockInput = new Stock();
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  stockSelected(stock: Stock) {
    this.stock = stock;
    this.experience.stock = this.stock.pk;
  }

  afterStockAdded(experiment: Experience) {
    this.onOperationExperiment.emit(experiment);
  }

  add() {
    if (this.stockInput.pk){
      console.log(this.stockInput);
      console.log(this.stockInput);
      this.experience.stock = this.stockInput.pk;
    }
    this.experience.category = 'NA';
    this.experienceService.add(this.experience).subscribe(experiment => this.afterStockAdded(experiment),
      error => this.postOfficerService.deliverMessage('Error on add experiment. Please review your data.'));
  }
}
