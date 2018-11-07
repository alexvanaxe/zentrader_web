import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { NoteModalComponent } from '../../note/note-modal/note-modal.component';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/model/account';

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
              private accountService: AccountService,
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
    console.log(experience);
    this.experienceService.patch(experience).subscribe(experience_returned => this.retrieveExperiments());
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
}
