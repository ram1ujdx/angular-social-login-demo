import { Component, OnInit } from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  user: SocialUser;


  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      user=>{
      sessionStorage.setItem('user.provider',user.provider);
      sessionStorage.setItem('user.authToken',user.authToken);
      sessionStorage.setItem('user.authorizationCode',user.authorizationCode);
      sessionStorage.setItem('user.idToken',user.idToken);
      }
      )
  }

  

  signOut(): void {
    this.authService.signOut();
  }

}
