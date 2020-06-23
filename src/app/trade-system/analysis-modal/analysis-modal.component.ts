import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@AutoUnsubscribe()
@Component({
  selector: 'zen-analysis-modal',
  templateUrl: './analysis-modal.component.html',
  styleUrls: ['./analysis-modal.component.css']
})
export class AnalysisModalComponent implements OnInit, OnDestroy {

  closeResult: string;
  @Input() analysisPk: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {}

  openLg(content) {
      this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
