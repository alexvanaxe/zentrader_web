import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Sell } from '../model/sell';
import { SellService } from '../sell/sell.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { QuickSell } from '../model/quick-sell';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-sell-edit',
  templateUrl: './sell-edit.component.html',
  styleUrls: ['./sell-edit.component.css']
})
export class SellEditComponent implements OnInit, OnDestroy {
  @Input() sell: Sell;
  @Output() onEditSell = new EventEmitter<Sell>();

  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  edit(sell: Sell) {
    this.sellService.patch(sell).subscribe(result => this.afterSell(result), error => this.postOfficerService.deliverMessage("Error on editing sell. Please review your data."));
  }

  afterSell(sell: Sell) {
    this.sell = sell;
    this.onEditSell.emit(sell);
  }

  updateSell() {
    this.sellService.get(this.sell.pk).subscribe(result => this.afterSell(result), error => this.postOfficerService.deliverMessage("Error on retrieving sell. Please check the server."));
  }

  getQuickSell(): QuickSell {
    const quickSell = new QuickSell();
    quickSell.buy = this.sell.buy;
    quickSell.price = this.sell.stock_data.price;
    quickSell.stock = this.sell.stock;
    quickSell.amount = this.sell.amount_available;
    quickSell.nickname = this.sell.nickname; 
    quickSell.stop_gain = this.sell.stop_gain;
    quickSell.stop_loss = this.sell.stop_loss;

    return quickSell;
  }

  execute(sell: Sell) {
    const executed_sell = new Sell();
    executed_sell.pk = sell.pk;
    executed_sell.executed = true;

    this.sellService.patch(executed_sell).subscribe(result => this.updateSell(), error => this.postOfficerService.deliverMessage("Error executing sell. Please review your data."));
  }
}
