import { Component, OnInit, Input } from '@angular/core';
import { PaperBuy } from '../model/paper_buy';
import { PaperBuyService } from '../paper-buy.service';

@Component({
  selector: 'zen-paper-buy-edit',
  templateUrl: './paper-buy-edit.component.html',
  styleUrls: ['./paper-buy-edit.component.css']
})
export class PaperBuyEditComponent implements OnInit {

  @Input() paperBuy: PaperBuy;

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
  }

  save() {
    this.paperBuyService.patch(this.paperBuy).subscribe(result => console.log(result));
  }
}
