import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* Se ejecuta cada vez que se obtiene el posteo */
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

/*Este servicio tendra la logica para consumir datos de una pagina especifica en esta caso jsonholder*/
export class DataService {

  constructor( private http: HttpClient) { }


  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(console.log));
  }
}
