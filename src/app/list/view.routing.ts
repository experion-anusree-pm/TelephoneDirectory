import {Routes,RouterModule} from "@angular/router";
import{ViewContactComponent}from'./view-contact.component';

export const DETAILROUTES:Routes=[
    {path:'view/:i',component:ViewContactComponent}
];