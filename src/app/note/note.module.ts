import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { NoteModalComponent } from './note-modal/note-modal.component';

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
    CommonModule
  ],
  declarations: [NoteModalComponent],
  exports: [NoteModalComponent]
})
export class NoteModule { }
