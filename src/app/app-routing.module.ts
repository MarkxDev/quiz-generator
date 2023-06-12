import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './componets/select/select.component';
import { AppService } from './services/app.service';
import { ResultComponent } from './componets/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: SelectComponent,
    resolve: {
      categories: () => inject(AppService).getCategories()
    },
  },
  {
    path: 'result',
    component: ResultComponent,
    resolve: {
      quizEndData: () => inject(AppService).getResult()
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
