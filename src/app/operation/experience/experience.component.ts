import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from '../model/experience';
import { Stock } from '../../stock/model/stock';

@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience;

  constructor(private experienceService: ExperienceService) {
    this.experience = new Experience();
  }

  ngOnInit() {
  }

  stockSelected(stock: Stock) {
    this.experience.stock = stock.pk;
  }

  add() {
    this.experienceService.add(this.experience).subscribe();
  }
}
