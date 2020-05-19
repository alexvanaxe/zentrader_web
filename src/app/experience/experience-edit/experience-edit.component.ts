import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Experience } from 'app/operation/model/experience';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { PostOfficerService } from 'app/postoffice/post-officer-service.service';
import { Buy } from 'app/operation/model/buy';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';
import { DateService } from '../../shared/services/date-service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit, OnDestroy {
  @Input() experience: Experience;
  @Input() editable: boolean;
  @Output() onExperienceChanged = new EventEmitter<Experience>();
  @Output() onToggleEdit = new EventEmitter<boolean>();

  dateSelected: NgbDateStruct;

  constructor(private experienceService: ExperienceService, private postOfficerService: PostOfficerService, private dateService: DateService) { }

  ngOnInit() {
    this.getStructDate();
  }

  ngOnDestroy() {}

  getStructDate() {
    this.dateSelected = this.dateService.toNgbDateStruct(this.experience.estimated_date);
  }

  edit() {
    if (this.dateSelected) {
      this.experience.estimated_date = this.dateService.toStringDateFromNgbDateStruct(this.dateSelected);
    } else {
      this.experience.estimated_date = '';
    }
    this.experienceService.patch(this.experience).subscribe(result => this.afterEdit(result), error => this.postOfficerService.deliverMessage("Error making update. Please review your data."));
  }

  updateExperiment(buy: Buy) {
    this.experienceService.get(this.experience.pk, this.experience.detailed).subscribe(result => this.afterEdit(result), error => this.postOfficerService.deliverMessage("Error retrieving the experiment. Please check the server.")); 
  }

  afterEdit(experience: Experience) {
    experience.detailed = this.experience.detailed;
    this.onExperienceChanged.emit(experience);
  }

  getPiranhaIndicator(experience: Experience) {
    if (experience.price > experience.operation_limit) {
      return "#c6b1b4";
    } else {
      return "white";
    }
  }

  toggleEdit() {
    this.onToggleEdit.emit(true);
  }
}
