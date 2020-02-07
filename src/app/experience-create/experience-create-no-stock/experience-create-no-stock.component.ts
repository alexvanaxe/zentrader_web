import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Experience } from 'app/operation/model/experience';
import { Stock } from 'app/stock/model/stock';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { PostOfficerService } from 'app/postoffice/post-officer-service.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-create-no-stock',
  templateUrl: './experience-create-no-stock.component.html',
  styleUrls: ['./experience-create-no-stock.component.css']
})
export class ExperienceCreateNoStockComponent implements OnInit, OnDestroy {
  experience: Experience;
  @Input() stock: Stock;
  @Output() onOperationExperiment = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService) {
    this.experience = new Experience();
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  afterStockAdded(experiment: Experience) {
    this.onOperationExperiment.emit(experiment);
  }

  add() {
    this.experience.stock = this.stock.pk;
    this.experience.category = 'NA';
    this.experienceService.add(this.experience).subscribe(experiment => this.afterStockAdded(experiment),
      error => this.postOfficerService.deliverMessage('Error on add experiment. Please review your data.'));
  }
}
