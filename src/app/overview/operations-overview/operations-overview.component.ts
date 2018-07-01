import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyService } from 'app/operation/buy/buy.service';
import { Buy } from 'app/operation/model/buy';
import { Experience } from '../../operation/model/experience';
import { ExperienceService } from '../../operation/experience/experience.service';

@Component({
  selector: 'zen-operations-overview',
  templateUrl: './operations-overview.component.html',
  styleUrls: ['./operations-overview.component.css']
})
export class OperationsOverviewComponent implements OnInit {

  buys: Buy[];
  experiments: Experience[];

  constructor(private buyService: BuyService, private experienceService: ExperienceService) {
    this.updateExperienceList();
  }

  ngOnInit() {
  }

  updateOperationList() {
  }

  updateBuys(buy: Buy) {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }

  updateExperienceList() {
   this.experienceService.list().subscribe(experiments => this.experiments = experiments);
  }
}
