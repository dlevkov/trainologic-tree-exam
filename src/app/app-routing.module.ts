import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from 'app/contacts/contacts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
