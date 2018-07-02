import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-buy-focus',
  templateUrl: './buy-focus.component.html',
  styleUrls: ['./buy-focus.component.css']
})
export class BuyFocusComponent implements OnInit {

  buys: Buy[];
  constructor(private buyService: BuyService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.buyService.list().subscribe(result => this.buys = result);
  }

  edit(buy: Buy) {
    console.log(buy);
    this.buyService.patch(buy).subscribe(result => this.list());
  }

}
