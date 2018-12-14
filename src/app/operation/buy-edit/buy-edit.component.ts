import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Buy } from '../model/buy';
import { BuyService } from '../buy/buy.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@Component({
  selector: 'zen-buy-edit',
  templateUrl: './buy-edit.component.html',
  styleUrls: ['./buy-edit.component.css']
})
export class BuyEditComponent implements OnInit {
  @Input() buy: Buy;
  @Output() onEditBuy = new EventEmitter<Buy>();

  constructor(private buyService: BuyService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  edit(buy: Buy) {
    this.buyService.patch(buy).subscribe(result => this.afterBuy(result), error => this.postOfficerService.deliverMessage("Error editing stock. Please review your data."));
  }

  afterBuy(buy: Buy) {
    this.buy = buy;
    this.onEditBuy.emit(buy);
  }

  updateBuy() {
    this.buyService.get(this.buy.pk).subscribe(result => this.afterBuy(result), error => this.postOfficerService.deliverMessage("Error retrieving stock. Check the server."));
  }

}
