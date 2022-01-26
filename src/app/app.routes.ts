import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
