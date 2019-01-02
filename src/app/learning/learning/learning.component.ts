import { Component, OnInit } from '@angular/core';
import { PaperBuyService } from '../paper-buy.service';
import { PaperBuy } from '../model/paper_buy';

@Component({
  selector: 'zen-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  paperBuys: PaperBuy[];

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
    this.getPaperBuys();
  }

  getPaperBuys() {
    this.paperBuyService.list().subscribe(result => this.paperBuys = result);
  }

}
