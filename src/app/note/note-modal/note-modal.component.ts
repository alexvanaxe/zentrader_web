import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';  
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
import { Note } from '../model/note';
import { Experience } from '../../operation/model/experience';
import { NoteService } from '../note.service';

@Component({
  selector: 'zen-note-modal',
  templateUrl: './note-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./note-modal.component.css']
})
export class NoteModalComponent implements OnInit {
  closeResult: string;
  noteAtr: Note;
  @Input() experiment: Experience;

  constructor(private modalService: NgbModal, private noteService: NoteService) {
    this.noteAtr = new Note();
  }


  ngOnInit() {

  }

  openLg(content) {
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  add() {
    this.noteAtr.operation = this.experiment.pk;
    this.noteService.add(this.noteAtr).subscribe(noteAdded => this.noteAtr = new Note())
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
