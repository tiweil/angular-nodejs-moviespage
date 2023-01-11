import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from './models/Movie';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
onSubmit(arg0: number,arg1: string) {
throw new Error('Method not implemented.');
}
delProd(arg0: string) {
throw new Error('Method not implemented.');
}
updProd(arg0: string,arg1: string,arg2: number) {
throw new Error('Method not implemented.');
}
    // myProds:Movie[] = []
    // constructor(private prodSrv: ProductService) {
    //     prodSrv.getItems().subscribe(res => this.myProds = res)
    //     console.log(this.myProds)
    // }

}
