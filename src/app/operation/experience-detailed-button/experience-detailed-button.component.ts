import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceService } from '../experience/experience.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-detailed-button',
  templateUrl: './experience-detailed-button.component.html',
  styleUrls: ['./experience-detailed-button.component.css']
})
export class ExperienceDetailedButtonComponent implements OnInit, OnDestroy {

  @Input() experience: Experience;
  @Output() onDetailsRetrieved = new EventEmitter<Experience>();

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  retrieveDetailed() {
    this.experienceService.get(this.experience.pk, true).subscribe(result => this.emitDetailsRetrieved(result));
  }

  emitDetailsRetrieved(detailed: Experience) {
    this.onDetailsRetrieved.emit(detailed);
  }

}
