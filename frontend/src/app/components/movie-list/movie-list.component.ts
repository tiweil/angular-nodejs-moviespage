import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import HP from 'src/app/models/HP';
import { Movie } from 'src/app/models/Movie';
import { ProductService } from 'src/app/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoreInfoModalComponent } from '../more-info-modal/more-info-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent{
  curPage: number;
  pageSize: number;

  public currentId='';
  myProds:Movie[] = [];

  tempProd:Movie[]=[];//auxiliary array to save the original data

//the function connect us to the more-info component and send the currentId
  openModal(id:string) {
    const modalRef = this.modalService.open(MoreInfoModalComponent);
    this.currentId=id;
    modalRef.componentInstance.currentId = this.currentId;

  }
  constructor(private prodSrv: ProductService,private modalService: NgbModal) {
      prodSrv.getItems().subscribe(res => {
        this.myProds = res;
        this.tempProd=this.myProds;
      })
      console.log(this.myProds)
      this.curPage = 1;
      this.pageSize = 10;//amount of cards per page
  }
  //amount of pages depending on the amount of card you set for a page
  numberOfPages() {
    return Math.ceil(this.myProds.length / this.pageSize);
  }

  searchMovie(specMovie:string){
    let newProds:Movie[]=[]
    this.myProds.map((item)=>{
      //check if there is a title that includes the typed word 
      if(item.fullTitle.includes(specMovie)||item.fullTitle.toLowerCase().includes(specMovie)||item.fullTitle.toUpperCase().includes(specMovie)){
        newProds.push(item)
      }
    })
    this.myProds=newProds;
  }
  reset(){
    this.myProds=this.tempProd;
  }

}
