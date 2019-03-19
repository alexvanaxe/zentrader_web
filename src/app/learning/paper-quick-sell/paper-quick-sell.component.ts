import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PaperSellService } from '../paper-sell.service';
import { PaperSell } from '../model/paper_sell';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-paper-quick-sell',
  templateUrl: './paper-quick-sell.component.html',
  styleUrls: ['./paper-quick-sell.component.css']
})
export class PaperQuickSellComponent implements OnInit, OnDestroy {

  @Input() paperBuy: any;
  @Output() onPaperSellCreated = new EventEmitter<PaperSell>();
  
  constructor(private paperSellService: PaperSellService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  quickPaperSell() {
    const quickPperSell = new PaperSell();

    quickPperSell.stock = this.paperBuy.stock;
    quickPperSell.nickname = this.paperBuy.nickname;
    quickPperSell.amount = this.paperBuy.amount;
    quickPperSell.price = this.paperBuy.price;
    quickPperSell.paper_buy = this.paperBuy.pk; //We assume this paperBuy is an paperBuy.
    quickPperSell.expanded = this.paperBuy.expanded;

    this.paperSellService.post(quickPperSell).subscribe(result => this.onPaperSellCreated.emit(result));
  }

}
