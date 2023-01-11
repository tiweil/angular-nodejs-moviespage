import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
// import HP from '../models/HP';
import SpecificMovie from '../models/SpecificMovie';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URLall = "http://localhost:6060/movies"
    constructor(private http: HttpClient) { }

    // Read
    getItems(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.URLall);
    }

    getSingleItem(id:string):Observable<SpecificMovie>{
        console.log(this.URLall+"/"+id)
        return this.http.get<SpecificMovie>(this.URLall+"/"+id);
    }

}