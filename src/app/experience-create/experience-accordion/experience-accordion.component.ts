import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Buy } from 'app/operation/model/buy';
import { Experience } from 'app/operation/model/experience';
import { Sell } from 'app/operation/model/sell';
import { Stock } from 'app/stock/model/stock';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-accordion',
  templateUrl: './experience-accordion.component.html',
  styleUrls: ['./experience-accordion.component.css']
})
export class ExperienceAccordionComponent implements OnInit, OnDestroy {
  constructor(private modalService: NgbModal) {
    this.stock_input = new Stock();
  }
  closeResult: string;
  @Output() onOperationBuy = new EventEmitter<Buy>();
  @Output() onOperationExperiment = new EventEmitter<Experience>();
  @Output() onOperationSell = new EventEmitter<Sell>();

  @Output() onOperationMade = new EventEmitter();

  @Input() stock_input: Stock;

  ngOnInit() {
  }

  ngOnDestroy() {}

  notifyBuy(buy: Buy) {
    this.onOperationBuy.emit(buy);
    this.onOperationMade.emit();
  }

  notifyExperiment(experience: Experience) {
    this.onOperationExperiment.emit(experience);
    this.onOperationMade.emit();
  }

  notifySell(sell: Sell) {
    this.onOperationSell.emit(sell);
    this.onOperationMade.emit();
  }

  openLg(content) {
        this.modalService.open(content).result.then((result) => {
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
