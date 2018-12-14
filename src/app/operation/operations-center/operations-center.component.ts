import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { Buy } from '../model/buy';
import { Sell } from '../model/sell';

@Component({
  selector: 'zen-operations-center',
  templateUrl: './operations-center.component.html',
  styleUrls: ['./operations-center.component.css']
})
export class OperationsCenterComponent implements OnInit {
  experiences: Experience[];
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.list().subscribe(result => this.setExperience(result));
  }

  setExperience(experiences: Experience[]) {
    this.experiences = experiences;
  }

  updateExperience(experience: Experience, index: number) {
    this.experiences[index] = experience;
    this.experiences[index].expanded = true;
  }

  updateBuy(buy: Buy, exp_index: number, buy_index: number) {
    this.experiences[exp_index].buy_set[buy_index] = buy;
    this.experiences[exp_index].buy_set[buy_index].expanded = true;
  }

  updateSell(sell: Sell, exp_index: number, buy_index: number, sell_index: number) {
    this.experiences[exp_index].buy_set[buy_index].sell_set[sell_index] = sell;
    this.experiences[exp_index].buy_set[buy_index].sell_set[sell_index].expanded = true;
  }

  processResult(result: Experience, exp_index:number, buy_index: number, sell_index: number) {
    this.experiences[exp_index] = result;
    this.experiences[exp_index].expanded = true;
    if (buy_index != null) {
      this.experiences[exp_index].buy_set[buy_index].expanded = true;
    }
    if (buy_index != null && sell_index != null) {
      this.experiences[exp_index].buy_set[buy_index].sell_set[sell_index].expanded = true;
    }
  }

  retrieveExperience(experience: Experience, exp_index:number, buy_index: number, sell_index: number) {
    this.experienceService.get(experience.pk).subscribe(result => this.processResult(result, exp_index, buy_index, sell_index));
  }

  isExpanded(operation) {
    if (operation.favorite == 1){
      operation.expanded = true;
      return true;
    } else if (operation.expanded) {
      return true;
    }
    return false;
  }

  getBackgroundColor(operation): string {
    if (operation.executed === true) {
      return '#C9C9C9'
    }
    if (+operation.stock_data.price <= +operation.stop_loss){
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
