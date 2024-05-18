import { Routes } from '@angular/router';
import {LoadingComponent} from "./pages/loading/loading.component";
import {ConfigurationComponent} from "./pages/configuration/configuration.component";
import {HomeComponent} from "./pages/home/home.component";
import {IndexComponent} from "./pages/index/index.component";

export const routes: Routes = [
  {path: 'loading', component: LoadingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'index', component: IndexComponent}
];
