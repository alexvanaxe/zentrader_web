import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Buy } from '../model/buy';
import { BuyService } from '../buy/buy.service';

@Component({
  selector: 'zen-buy-edit',
  templateUrl: './buy-edit.component.html',
  styleUrls: ['./buy-edit.component.css']
})
export class BuyEditComponent implements OnInit {
  @Input() buy: Buy;
  @Output() onEditBuy = new EventEmitter<Buy>();

  constructor(private buyService: BuyService) { }

  ngOnInit() {
  }

  edit(buy: Buy) {
    this.buyService.patch(buy).subscribe(result => this.afterBuy(result));
  }

  afterBuy(buy: Buy) {
    this.buy = buy;
    this.onEditBuy.emit(buy);
  }

  updateBuy() {
    this.buyService.get(this.buy.pk).subscribe(result => this.afterBuy(result));
  }

}
