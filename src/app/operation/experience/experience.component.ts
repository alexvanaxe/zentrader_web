import {Component, Input, OnInit} from '@angular/core';
import {ExperienceService} from './experience.service';
import {Experience} from '../model/experience';
import {Operation, OperationNested} from '../model/operation';

@Component({
  selector: 'zen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience;
  @Input() operation: OperationNested;

  constructor(private experienceService: ExperienceService) {
    this.experience = new Experience();
    this.operation = new OperationNested();
  }

  ngOnInit() {
  }

  add() {
    console.log(this.operation);
    this.experience.operation = this.operation.pk;
    this.experienceService.add(this.experience).subscribe();
  }

  selectOperation(operation: Operation) {
    this.experience.operation = operation.pk;
  }

}
