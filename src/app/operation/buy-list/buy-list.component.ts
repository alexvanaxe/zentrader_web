import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {BuyService} from '../buy/buy.service';
import {Buy, BuyNested} from '../model/buy';

@Component({
  selector: 'zen-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css']
})
export class BuyListComponent implements OnInit {

  @Input() buys: BuyNested[];
  @Output() buySelected = new EventEmitter<Buy>();

  constructor(private buyService: BuyService) { }

  ngOnInit() {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }

  emitBuySelected(buySelected: Buy) {
    this.buySelected.emit(buySelected);
  }

}
