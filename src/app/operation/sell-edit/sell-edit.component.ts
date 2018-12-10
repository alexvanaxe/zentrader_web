import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sell } from '../model/sell';
import { SellService } from '../sell/sell.service';

@Component({
  selector: 'zen-sell-edit',
  templateUrl: './sell-edit.component.html',
  styleUrls: ['./sell-edit.component.css']
})
export class SellEditComponent implements OnInit {
  @Input() sell: Sell;
  @Output() onEditSell = new EventEmitter<Sell>();

  constructor(private sellService: SellService) { }

  ngOnInit() {
  }

  edit(sell: Sell) {
    this.sellService.patch(sell).subscribe(result => this.afterSell(result));
  }

  afterSell(sell: Sell) {
    this.sell = sell;
    this.onEditSell.emit(sell);
  }

  updateSell() {
    this.sellService.get(this.sell.pk).subscribe(result => this.afterSell(result));
  }

  execute(sell: Sell) {
    const executed_sell = new Sell();
    executed_sell.pk = sell.pk;
    executed_sell.executed = true;

    this.sellService.patch(executed_sell).subscribe(result => this.updateSell());
  }
}
