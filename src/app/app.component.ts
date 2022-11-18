import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

imports: [
  BrowserModule,
  NgbModule,
  AppRoutingModule,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wallet: ethers.Wallet | undefined;

  constructor(){
  }

  createWallet(){
    this.wallet = ethers.Wallet.createRandom();

  }
}
