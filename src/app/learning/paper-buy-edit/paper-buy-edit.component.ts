import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PaperBuy } from '../model/paper_buy';
import { PaperBuyService } from '../paper-buy.service';
import { PaperSell } from '../model/paper_sell';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-paper-buy-edit',
  templateUrl: './paper-buy-edit.component.html',
  styleUrls: ['./paper-buy-edit.component.css']
})
export class PaperBuyEditComponent implements OnInit, OnDestroy {

  @Input() paperBuy: PaperBuy;
  @Output() onPaperBuySaved = new EventEmitter<PaperBuy>();
  @Output() onPaperSellCreated = new EventEmitter<PaperSell>();
  @Output() onPaperBuyDeleted = new EventEmitter<PaperBuy>();

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

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

  delete() {
    this.paperBuyService.delete(this.paperBuy.pk).subscribe(result => this.onDeleted(result));
  }

  onDeleted(result: any) {
    this.onPaperBuyDeleted.emit(this.paperBuy);
  }
}
