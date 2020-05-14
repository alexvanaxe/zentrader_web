import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PaperBuyService } from '../paper-buy.service';
import { PaperBuy } from '../model/paper_buy';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-paper-quick-buy',
  templateUrl: './paper-quick-buy.component.html',
  styleUrls: ['./paper-quick-buy.component.css']
})
export class PaperQuickBuyComponent implements OnInit, OnDestroy {

  @Input() experience: any;

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  quickPaperBuy() {
    const quickPperBuy = new PaperBuy();

    quickPperBuy.stock = this.experience.stock;
    quickPperBuy.nickname = this.experience.nickname;
    quickPperBuy.amount = this.experience.amount;
    quickPperBuy.price = this.experience.price;
    quickPperBuy.experience = this.experience.pk; //We assume this experience is an experience.
    quickPperBuy.expanded = this.experience.expanded;

    this.paperBuyService.post(quickPperBuy).subscribe();
  }

}
