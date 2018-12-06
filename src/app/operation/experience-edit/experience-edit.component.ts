import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceService } from '../experience/experience.service';

@Component({
  selector: 'zen-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  @Input() experience: Experience;
  @Output() onEditExperience = new EventEmitter<Experience>();


  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experience = new Experience();
  }

  edit(experience: Experience) {
    this.experienceService.patch(experience).subscribe(result => this.afterEdit(result));
  }

  afterEdit(experience: Experience) {
    this.experience = experience;
    this.onEditExperience.emit(experience);
  }

  updateExperiment() {
    this.experienceService.get(this.experience.pk).subscribe(result => this.afterEdit(result)); 
  }

  getPiranhaIndicator(experience: Experience) {
    if (experience.price > experience.operation_limit){
      return "#c6b1b4";
    } else {
      return "white";
    }
  }
}
