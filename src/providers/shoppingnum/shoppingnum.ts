import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShoppingnumProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShoppingnumProvider {
  phone:string;
  constructor(public http: Http) {
    this.phone = localStorage.getItem('userphone');
  }
  handleError(error){
    return Promise.reject(error.message||error);
  }
  numchange(cakeid:number,num:number){
        return this.http.put('http://localhost:3000/cake/num',
                      {cakeid:cakeid,
                        phone:this.phone,
                        num:num,
                      }).toPromise()
                      .then(res=>{
                          return res.json();
                      })
          .catch(this.handleError)
  }
}
