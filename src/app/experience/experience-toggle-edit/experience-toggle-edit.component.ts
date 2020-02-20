import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'app/operation/model/experience';

@Component({
  selector: 'zen-experience-toggle-edit',
  templateUrl: './experience-toggle-edit.component.html',
  styleUrls: ['./experience-toggle-edit.component.css']
})
export class ExperienceToggleEditComponent implements OnInit {

  @Input() experience: Experience;

  editing = false;
  constructor() { }

  ngOnInit() {
  }

  isEditing() {
    this.editing = !this.editing;
  }
}
