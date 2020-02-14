import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { NoteModule } from 'app/note/note.module';
import { SharedModule } from 'app/shared/shared.module';
import { StockEditModule } from 'app/stock-edit/stock-edit.module';
import { ExperienceCardModalComponent } from './experience-card-modal/experience-card-modal.component';

@NgModule({
  declarations: [ExperienceCardComponent, ExperienceCardModalComponent],
  exports: [ExperienceCardComponent, ExperienceCardModalComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    NoteModule,
    SharedModule,
    StockEditModule,
  ]
})
export class ExperienceModule { }
