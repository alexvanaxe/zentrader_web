import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';  
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
import { Note } from '../model/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'zen-note-modal',
  templateUrl: './note-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./note-modal.component.css']
})
export class NoteModalComponent implements OnInit, OnChanges {
  closeResult: string;
  noteAtr: Note;
  notes: Note[];
  @Input() operation_pk: string;

  constructor(private modalService: NgbModal, private noteService: NoteService) {
    this.noteAtr = new Note();
  }

  ngOnInit() {
    if (this.operation_pk) {
      this.refreshList();
    }

  }

  ngOnChanges(changes: SimpleChanges) {
      this.refreshList();
  }

  openLg(content) {
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  add() {
    this.noteAtr.operation = this.operation_pk;
    this.noteService.add(this.noteAtr).subscribe(noteAdded => this.whenNoteAdded())
  }

  whenNoteAdded() {
    this.noteAtr = new Note();
    this.refreshList();
  }

  refreshList() {
    this.noteService.get(this.operation_pk).subscribe(result => this.notes = result);
  }

  onKeydown(event) {
    this.add();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
