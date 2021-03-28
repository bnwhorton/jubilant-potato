import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MoneycalculatorComponent } from './dndtools/moneycalculator/moneycalculator.component';

const routes: Routes = [
  { path: 'money', component: MoneycalculatorComponent },
//  { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
