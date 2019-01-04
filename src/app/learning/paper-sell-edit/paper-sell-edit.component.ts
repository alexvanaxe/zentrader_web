import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PaperSell } from '../model/paper_sell';
import { PaperSellService } from '../paper-sell.service';

@Component({
  selector: 'zen-paper-sell-edit',
  templateUrl: './paper-sell-edit.component.html',
  styleUrls: ['./paper-sell-edit.component.css']
})
export class PaperSellEditComponent implements OnInit {

  @Input() paperSell: PaperSell;
  @Output() onPaperSellSaved = new EventEmitter<PaperSell>();
  @Output() onPaperSellDeleted = new EventEmitter<PaperSell>();

  constructor(private paperSellService: PaperSellService) { }

  ngOnInit() {
  }

  save() {
   this.paperSellService.patch(this.paperSell).subscribe(result => this.onSaved(result)); 
  }

  onSaved(result: PaperSell) {
    Object.assign(this.paperSell, result);
    this.onPaperSellSaved.emit(this.paperSell);
  }

  delete(paperSell: PaperSell) {
    this.paperSellService.delete(this.paperSell.pk).subscribe(result => this.onDeleted(result))
  }

  onDeleted(result: any) {
    this.onPaperSellDeleted.emit(this.paperSell);
  }
}
