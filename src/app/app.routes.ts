import { Routes } from '@angular/router';
import {LoadingComponent} from "./loading/loading.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index/index.component";

export const routes: Routes = [
  {path: 'loading', component: LoadingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'index', component: IndexComponent}
];
