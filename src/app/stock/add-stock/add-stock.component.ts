import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core'; 
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {Stock} from '../model/stock';
import {StockService} from '../stock.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-add-stock',
  templateUrl: './add-stock.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit, OnDestroy {
  closeResult: string;
  stock: Stock;
  @Output() onStockAdded = new EventEmitter<Stock>();

  constructor(private modalService: NgbModal, private stockService: StockService) {
    this.stock = new Stock();
  }

  ngOnInit() {
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

  add() {
    this.stockService.add(this.stock).subscribe(stockAdded => this.onStockAdded.emit(stockAdded));
  }
}
