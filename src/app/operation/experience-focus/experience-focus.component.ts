import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { NoteModalComponent } from '../../note/note-modal/note-modal.component';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/model/account';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-focus',
  templateUrl: './experience-focus.component.html',
  styleUrls: ['./experience-focus.component.css']
})
export class ExperienceFocusComponent implements OnInit, OnDestroy {

  experiences: Experience[] = new Array();
  account: Account;
  color: String;

  constructor(private experienceService: ExperienceService) {
    this.account = new Account();
  }

  ngOnInit() {
    this.retrieveExperiments();
  }

  ngOnDestroy() {}

  addExperience(experience: Experience) {
    this.experiences.push(experience);
  }

  updateExperience(experience: Experience, oldExperience: Experience) {
    const index = this.experiences.indexOf(oldExperience);

    if (index > -1) {
      this.experiences[index] = experience;
    }
  }

  setRetrieve(experiences: Experience[]) {
    this.experiences = experiences;
  }

  retrieveExperiments() {
    this.experienceService.list().subscribe(experiences => this.setRetrieve(experiences));
  }
}
