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

  experiences: Experience[];
  account: Account;
  color: String;

  constructor(private experienceService: ExperienceService,
              private buyService: BuyService,
              private accountService: AccountService,
              private postOfficerService: PostOfficerService,
              private modalService: NgbModal
  ) {
    this.account = new Account();
  }

  ngOnInit() {
    this.retrieveExperiments();
    this.getDefaultAccount();
  }

  ngOnDestroy() {}

  retrieveExperiments() {
    this.experienceService.list().subscribe(experiences => this.experiences = experiences);
  }

  edit(experience: Experience) {
    this.experienceService.patch(experience).subscribe(experience_returned => this.retrieveExperiments(), error => this.postOfficerService.deliverMessage("Error on update"));
  }

  delete(experience: Experience) {
    this.experienceService.delete(experience).subscribe(result => this.retrieveExperiments());
  }

  updateExperiment(experience: Experience) {
    this.retrieveExperiments();
  }

  getDefaultAccount() {
    this.accountService.getDefault().subscribe(defaultAccount => this.account = defaultAccount)
  }

  getPiranhaIndicator(experience: Experience) {
    if (experience.price > experience.operation_limit){
      return "#c6b1b4";
    } else {
      return "white";
    }
  }

  getColor(experience: Experience): String {
    if (experience.cost > this.account.equity) {
      return "red"
    } else {
      return "blue"
    }
  }

  open() {
    const options: NgbModalOptions = {
      size: 'lg',
    };

    const modalRef = this.modalService.open(NoteModalComponent, options).result
    .then((result) => {

    }, (reason) => {

    });
  
  }
  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }
}
