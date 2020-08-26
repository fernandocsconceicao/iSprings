import { VeiculoDTO } from './../../models/veiculo.dto';
import { API_CONFIG } from './../../config/apiconfig';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VeiculoService{
    
    constructor( public http : HttpClient){

    }
findAll() : Observable<VeiculoDTO[]>{
    return this.http.get<VeiculoDTO[]>(`${API_CONFIG.baseUrl}/veiculos`);

    }

}