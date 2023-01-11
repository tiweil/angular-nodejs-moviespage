import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoreInfoModalComponent } from './components/more-info-modal/more-info-modal.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [ MoreInfoModalComponent ]
})
export class AppRoutingModule { }
