import { Component } from '@angular/core';
import { AuthConfig, OAuthService, JwksValidationHandler, NullValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  authConfig: AuthConfig = {
    issuer:'https://accounts.google.com',
    tokenEndpoint:'https://oauth2.googleapis.com/token',
    redirectUri: window.location.origin ,
    strictDiscoveryDocumentValidation:false,
    clientId: '${{ secrets.GOOGLE_CLIENT_ID }}',
    scope: 'openid profile email',
  }


  title = 'angular-boiler-plate';



  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(this.authConfig);
    // if(!this.oauthService.get){
    //   this.oauthService.initImplicitFlow();
    // }
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(res=>{
      if(!res) this.oauthService.initImplicitFlow();
    })

  }


  ngOnInit(){
    console.log(this.oauthService.getIdentityClaims());
  }
}
