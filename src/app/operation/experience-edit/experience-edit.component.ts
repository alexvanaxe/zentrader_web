import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceService } from '../experience/experience.service';
import { Buy } from '../model/buy';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@Component({
  selector: 'zen-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  @Input() experience: Experience;
  @Output() onExperienceChanged = new EventEmitter<Experience>();


  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  edit() {
    this.experienceService.patch(this.experience).subscribe(result => this.afterEdit(result), error => this.postOfficerService.deliverMessage("Error making update. Please review your data."));
  }

  updateExperiment(buy: Buy) {
    this.experienceService.get(this.experience.pk).subscribe(result => this.afterEdit(result), error => this.postOfficerService.deliverMessage("Error retrieving the experiment. Please check the server.")); 
  }

  afterEdit(experience: Experience) {
    this.onExperienceChanged.emit(experience);
  }

  getPiranhaIndicator(experience: Experience) {
    if (experience.price > experience.operation_limit){
      return "#c6b1b4";
    } else {
      return "white";
    }
  }
}
