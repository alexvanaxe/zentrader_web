import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  declarations: [NoteModalComponent],
  exports: [NoteModalComponent]
})
export class NoteModule { }
