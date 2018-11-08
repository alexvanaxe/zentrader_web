import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'; 

import * as moment from 'moment';

import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-buy-focus',
  templateUrl: './buy-focus.component.html',
  styleUrls: ['./buy-focus.component.css']
})
export class BuyFocusComponent implements OnInit, OnDestroy {

  buys: Buy[];
  constructor(private buyService: BuyService,
    private cd: ChangeDetectorRef,
    private postOfficerService: PostOfficerService) { }

  ngOnInit() {
    this.list();
  }

  ngOnDestroy() {}

  list() {
    this.buyService.list().subscribe(result => this.buys = result);
  }

  edit(buy: Buy) {
    this.buyService.patch(buy).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on update operation. Review your data."));
  }

  updateBuys() {
    this.list();
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }
}
