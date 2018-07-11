import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';   
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
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  stockSelected(stock: Stock) {
    this.experience.stock = stock.pk;
  }

  add() {
    this.experienceService.add(this.experience).subscribe(experiment => 
      this.onOperationExperiment.emit(experiment));
    this.experience = new Experience();
  }
}
