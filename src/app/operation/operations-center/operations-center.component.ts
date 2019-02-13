import { Component, OnInit, ViewChild } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { Buy } from '../model/buy';
import { Sell } from '../model/sell';
import { MatAccordionDisplayMode, MatExpansionPanel } from '@angular/material/expansion';
import { BuyService } from '../buy/buy.service';
import { SellService } from '../sell/sell.service';

@Component({
  selector: 'zen-operations-center',
  templateUrl: './operations-center.component.html',
  styleUrls: ['./operations-center.component.css']
})
export class OperationsCenterComponent implements OnInit {
  displayMode: MatAccordionDisplayMode;

  experiences: Experience[];
  constructor(private experienceService: ExperienceService,
              private buyService: BuyService,
              private sellService: SellService) {
  }

  ngOnInit() {
    this.experienceService.list().subscribe(result => this.setExperience(result));
  }

  loadBoughts(experienceExpanded: Experience) {
    this.buyService.list(true, experienceExpanded.pk).subscribe(result => experienceExpanded.buy_set = result);
  }

  loadSolds(buyExpanded: Buy) {
    this.sellService.list(buyExpanded.pk).subscribe(result => buyExpanded.sell_set = result);
  }

  setExperience(experiences: Experience[]) {
    this.experiences = experiences;
  }

  updateExperience(newExperience: Experience, oldExperience: Experience) {
    Object.assign(oldExperience, newExperience);
  }

  updateBuy(newBuy: Buy, oldBuy: Buy) {
    Object.assign(oldBuy, newBuy);
  }

  updateSell(newSell: Sell, oldSell: Sell) {
    Object.assign(oldSell, newSell);
  }

  getBackgroundColor(operation): string {
    if (operation.favorite >= 1) {
      return '#B0D6FD';
    }
    if (operation.executed === true) {
      return '#C9C9C9';
    }
    if (+operation.stock_data.price <= +operation.stop_loss) {
      return '#EBEBF4';
    }
    if (+operation.profit > 0) {
      return '#E6F4E6';
    } else if (+operation.profit <= 0) {
      return '#F4EBEB';
    }

    if (+operation.experience_gain > 0) {
      return '#E6F4E6';
    } else  if (+operation.experience_gain < 0) {
      return '#F4EBEB';
    }
  }
}
