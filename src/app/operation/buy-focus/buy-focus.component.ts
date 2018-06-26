import { Component, OnInit } from '@angular/core';
import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';

@Component({
  selector: 'app-buy-focus',
  templateUrl: './buy-focus.component.html',
  styleUrls: ['./buy-focus.component.css']
})
export class BuyFocusComponent implements OnInit {

  buys: Buy[];
  constructor(private buyService: BuyService) { }

  ngOnInit() {
    this.buyService.list().subscribe(result => this.buys = result);
  }

  edit(buy: Buy) {
    console.log(buy);
  }

}
