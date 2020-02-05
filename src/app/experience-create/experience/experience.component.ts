import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';
import { Stock } from 'app/stock/model/stock';
import { Experience } from 'app/operation/model/experience';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { PostOfficerService } from 'app/postoffice/post-officer-service.service';

@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experience: Experience;
  stock: Stock;
  @Input() stock_input: Stock;
  @Output() onOperationExperiment = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService) {
    this.experience = new Experience();
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
    this.experience.category = 'NA';
    this.experienceService.add(this.experience).subscribe(experiment => this.afterStockAdded(experiment),
      error => this.postOfficerService.deliverMessage('Error on add experiment. Please review your data.'));
  }
}
