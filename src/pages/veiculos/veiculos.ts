import { VeiculoDTO } from './../../models/veiculo.dto';
import { VeiculoService } from './../../services/domain/veiculo.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the VeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
})
export class VeiculosPage {
  items: VeiculoDTO[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public veiculoService : VeiculoService) {
  
  }

  ionViewDidLoad() {
    this.veiculoService.findAll()
    .subscribe(response =>{
     
      this.items=response;
      this.listarVeiculos(response);
    });
   
    error => {
     

    };
   
  }
  private listarVeiculos(response){
    console.log(response);
  }

}
