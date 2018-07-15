import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';   
import {Experience} from '../model/experience';
import {ExperienceService} from '../experience/experience.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit, OnDestroy {

  @Input() experiences: Experience[];

  @Output() onOperationUpdated  = new EventEmitter();

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.list().subscribe(experiences => this.experiences = experiences);
  }

  ngOnDestroy() {}

  notifyChanges() {
    this.onOperationUpdated.emit();
  }
}
