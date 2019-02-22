import { Component, OnInit } from '@angular/core';
import { ZentraderAuthServiceService } from '../zentrader-auth-service.service';
import { UserCredential } from '../model/User';

@Component({
  selector: 'zen-zentrader-auth',
  templateUrl: './zentrader-auth.component.html',
  styleUrls: ['./zentrader-auth.component.css']
})
export class ZentraderAuthComponent implements OnInit {

  constructor(private zentraderAuthService: ZentraderAuthServiceService) { }

  ngOnInit() {
    const user = new UserCredential("admin", "senha123");
    this.zentraderAuthService.post(user).subscribe(result => console.log(result));
    
  }

}
