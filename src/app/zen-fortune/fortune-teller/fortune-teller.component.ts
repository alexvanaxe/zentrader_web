import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZenFortuneService } from '../zen-fortune.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-fortune-teller',
  templateUrl: './fortune-teller.component.html',
  styleUrls: ['./fortune-teller.component.css']
})
export class FortuneTellerComponent implements OnInit, OnDestroy {

  fortune = '';

  constructor(private fortuneService: ZenFortuneService) { }

  ngOnDestroy() {}

  ngOnInit() {
    this.fortuneService.get().subscribe(result => this.fortune = result.cookie);
  }

}
