import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { NoteModalComponent } from '../../note/note-modal/note-modal.component';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-focus',
  templateUrl: './experience-focus.component.html',
  styleUrls: ['./experience-focus.component.css']
})
export class ExperienceFocusComponent implements OnInit, OnDestroy {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService,
              private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.retrieveExperiments();
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
