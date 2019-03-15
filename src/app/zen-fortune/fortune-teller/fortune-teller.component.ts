import { Component, OnInit } from '@angular/core';
import { ZenFortuneService } from '../zen-fortune.service';

@Component({
  selector: 'zen-fortune-teller',
  templateUrl: './fortune-teller.component.html',
  styleUrls: ['./fortune-teller.component.css']
})
export class FortuneTellerComponent implements OnInit {

  fortune: string = '';

  constructor(private fortuneService: ZenFortuneService) { }

  ngOnInit() {
    this.fortuneService.get().subscribe(result => this.fortune = result.cookie);
  }

}
