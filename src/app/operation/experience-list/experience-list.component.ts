import { Component, OnInit, Input } from '@angular/core';
import {Experience} from '../model/experience';
import {ExperienceService} from '../experience/experience.service';

@Component({
  selector: 'zen-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  @Input() experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    //this.experienceService.list().subscribe(experiences => this.experiences = experiences);
  }

}
