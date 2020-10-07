import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from  './album';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  constructor( private _http: Http ) { }

  getAlbum(id:number) {
    return this._http.get(this._albumUrl)
      .map(response => response.json(<Album>));
    return (Observable<Album>)
  }

}
