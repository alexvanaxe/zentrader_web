import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Sell } from '../model/sell';
import { SellService } from '../sell/sell.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@Component({
  selector: 'zen-sell-focus',
  templateUrl: './sell-focus.component.html',
  styleUrls: ['./sell-focus.component.css']
})
export class SellFocusComponent implements OnInit {

  sells: Sell[];
  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.sellService.list().subscribe(result => this.sells = result);
  }

  edit(sell: Sell) {
    this.sellService.patch(sell).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on update operation. Review your data."));
  }

  execute(sell: Sell) {
    const executed_sell = new Sell();
    executed_sell.pk = sell.pk;
    executed_sell.executed = true;

    this.sellService.patch(executed_sell).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on executing the operation. Review"));
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }

  getBackgroundColor(sell: Sell): string {
    if (sell.executed === true) {
      return '#C9C9C9'
    }
    /* if (+sell.stock_data.price <= +sell.stop_loss){
      return '#ea6464';
    }
    if (+sell.operation_gain_percent > 0) {
      return '#edfce5';
    } else {
      return '#f2dce0';
    }
  } */
    return '';
  }
}
