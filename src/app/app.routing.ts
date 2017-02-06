import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './list/add-contact.component';
import { ModuleWithProviders } from '@angular/core';
import { EditContactComponent } from './list/edit-contact.component';
import { ViewContactComponent } from './list/view-contact.component';
//import{DETAILROUTES} from'./list/view.routing';


const App_Routes: Routes = [
    {path:'addContact', component: AddContactComponent},
    {path:'editContact/:id', component: EditContactComponent},
    {path:'viewContact/:id', component: ViewContactComponent}
    
    
];

export const route: ModuleWithProviders = RouterModule.forRoot(App_Routes);