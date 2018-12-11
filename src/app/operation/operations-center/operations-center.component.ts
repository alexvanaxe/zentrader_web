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
  panelOpenState = false; // Used in accordion expansion component
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

}
