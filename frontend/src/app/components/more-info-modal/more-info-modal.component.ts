import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import SpecificMovie from 'src/app/models/SpecificMovie';
import { ProductService } from 'src/app/services/product.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-more-info-modal',
  templateUrl: './more-info-modal.component.html',
  styleUrls: ['./more-info-modal.component.css']
})
export class MoreInfoModalComponent implements OnInit{
  //the currentId was sent from movie-list-component
  @Input() public currentId!: string;
  // @input() public currentId;
  closeResult = '';
  currentMovie:SpecificMovie[]=[];
  constructor(
    public activeModal: NgbActiveModal,
    prodSrv:ProductService
  ) {
    console.log(this.currentId)
    prodSrv.getSingleItem(this.currentId).subscribe(res => {
      prodSrv.getSingleItem(this.currentId).subscribe(res=>{
        console.log(this.currentId)
        this.currentMovie[0] = res;
      })
      console.log(this.currentId)
      this.currentMovie[0] = res;
    })
   }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.currentId);
  }

}
