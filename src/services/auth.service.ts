import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../config/apiconfig';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from '../models/credenciais.dto';
import { StorageService } from './storage.service';
import { LocalUser } from '../models/localuser';


@Injectable()
export class AuthService{
    constructor (public storage: StorageService ,public http: HttpClient){
        
    }
    authenticate(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
        creds,
        {
            observe: 'response',
            responseType: 'text'
        }
        )

    }
    succesfulLogin(authorizationValue: string){
        let tok = authorizationValue.substring(7);
        //console.log(tok);
        let user : LocalUser= {
            token: tok
        }
        this.storage.setLocalUser(user);
    }
    logout( ){
        this.storage.setLocalUser(null);
    }

}