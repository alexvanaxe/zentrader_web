import {Component, Input, OnInit} from '@angular/core';
import {Sell} from '../model/sell';
import {SellService} from './sell.service';
import {Buy} from '../model/buy';

@Component({
  selector: 'zen-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  sell: Sell;

  constructor(private sellService: SellService) {
    this.sell = new Sell();
  }

  ngOnInit() {
  }

  add() {
    this.sellService.add(this.sell).subscribe();
  }
}
