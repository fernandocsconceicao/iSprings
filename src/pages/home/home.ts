import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    creds: CredenciaisDTO = {
      email: "",
      senha: ""
    }
  constructor(public navCtrl: NavController, public menu : MenuController, public auth: AuthService) {

  }
  pageMenu(){
    
    this.navCtrl.setRoot("MenuPage")

  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);

   
  }
  ionViewDidLeave(){
    this.menu.swipeEnable(true);
   
  }
  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.succesfulLogin(response.headers.get('Authorization'));
    this.pageMenu();
  }
    ,
    error=>{});
    
    

  }

}
