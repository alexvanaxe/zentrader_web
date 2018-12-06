import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

import { Experience } from '../model/experience';

@Component({
  selector: 'zen-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience;
  constructor() { }

  ngOnInit() {
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }
}
