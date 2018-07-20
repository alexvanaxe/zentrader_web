import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../account.service';

@Component({
  selector: 'zen-account-footer',
  templateUrl: './account-footer.component.html',
  styleUrls: ['./account-footer.component.css']
})
export class AccountFooterComponent implements OnInit {
  account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getDefaultAccount();
  }

  getDefaultAccount() {
    this.accountService.list().subscribe(accounts => this.account = accounts[0])
  }

}
