import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { NoteModule } from 'app/note/note.module';
import { SharedModule } from 'app/shared/shared.module';
import { StockEditModule } from 'app/stock-edit/stock-edit.module';
import { LearningModule } from 'app/learning/learning.module';
import { ExperienceCardModalComponent } from './experience-card-modal/experience-card-modal.component';
import { ExperienceToggleEditComponent } from './experience-toggle-edit/experience-toggle-edit.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { BuyModule } from 'app/buy/buy.module';

@NgModule({
  declarations: [ExperienceCardComponent, ExperienceCardModalComponent, ExperienceToggleEditComponent, ExperienceEditComponent],
  exports: [ExperienceCardComponent, ExperienceCardModalComponent, ExperienceToggleEditComponent, ExperienceEditComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    LearningModule,
    NoteModule,
    SharedModule,
    StockEditModule,
    BuyModule
  ]
})
export class ExperienceModule { }
