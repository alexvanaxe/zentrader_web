import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-focus',
  templateUrl: './experience-focus.component.html',
  styleUrls: ['./experience-focus.component.css']
})
export class ExperienceFocusComponent implements OnInit, OnDestroy {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

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
}
