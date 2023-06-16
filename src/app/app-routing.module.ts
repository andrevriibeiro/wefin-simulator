import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProposalFinishedComponent } from './components/proposal-finished/proposal-finished.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emprestimo', component: ProposalFinishedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }