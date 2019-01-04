import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PaperBuy } from '../model/paper_buy';
import { PaperBuyService } from '../paper-buy.service';
import { PaperSell } from '../model/paper_sell';

@Component({
  selector: 'zen-paper-buy-edit',
  templateUrl: './paper-buy-edit.component.html',
  styleUrls: ['./paper-buy-edit.component.css']
})
export class PaperBuyEditComponent implements OnInit {

  @Input() paperBuy: PaperBuy;
  @Output() onPaperBuySaved = new EventEmitter<PaperBuy>();
  @Output() onPaperSellCreated = new EventEmitter<PaperSell>();

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
  }

  save() {
    this.paperBuyService.patch(this.paperBuy).subscribe();
  }

  notifyBuyEdited(result: PaperBuy) {
    Object.assign(this.paperBuy, result);
    this.onPaperBuySaved.emit(this.paperBuy);
  }

  notifySellCreated(paperSellCreated: PaperSell) {
    this.onPaperSellCreated.emit(paperSellCreated);
  }
}
