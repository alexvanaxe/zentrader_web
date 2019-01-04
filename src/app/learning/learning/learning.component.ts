import { Component, OnInit } from '@angular/core';
import { PaperBuyService } from '../paper-buy.service';
import { PaperBuy } from '../model/paper_buy';
import { PaperSellService } from '../paper-sell.service';
import { PaperSell } from '../model/paper_sell';

@Component({
  selector: 'zen-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  paperBuys: PaperBuy[];
  paperSells: PaperSell[];

  constructor(private paperBuyService: PaperBuyService, private paperSellService: PaperSellService) { }

  ngOnInit() {
    this.getPaperBuys();
    this.getPaperSells();
  }

  getPaperBuys() {
    this.paperBuyService.list().subscribe(result => this.paperBuys = result);
  }

  getPaperSells() {
    this.paperSellService.list().subscribe(result => this.paperSells = result);
  }

  addNewPaperSell(paperSell: PaperSell) {
    this.paperSells.push(paperSell);
  }

  removeSell(paperSell: PaperSell) {
    const index = this.paperSells.indexOf(paperSell);

    if (index > -1) {
      this.paperSells.splice(index, 1);
    }
  }

  removeBuy(paperBuy: PaperBuy) {
    const index = this.paperBuys.indexOf(paperBuy);

    if (index > -1) {
      this.paperBuys.splice(index, 1);
    }
  }
}
