import { Component, OnInit, Input } from '@angular/core';
import { PaperSell } from '../model/paper_sell';
import { PaperSellService } from '../paper-sell.service';

@Component({
  selector: 'zen-paper-sell-edit',
  templateUrl: './paper-sell-edit.component.html',
  styleUrls: ['./paper-sell-edit.component.css']
})
export class PaperSellEditComponent implements OnInit {

  @Input() paperSell: PaperSell;

  constructor(private paperSellService: PaperSellService) { }

  ngOnInit() {
  }

  save() {
   this.paperSellService.patch(this.paperSell).subscribe(result => this.paperSell = result) 
  }

}
