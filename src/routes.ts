import { Routes }             from '@angular/router';
import { BlogComponent }      from './app/blog/blog.component';
import { ThingsComponent }    from './app/things/things.component';
import { HomeComponent }      from './app/home/home.component';
import { UploadPageComponent } from './app/admin/upload-page/upload-page.component';
import { AddTestComponent } from './app/admin/add-test/add-test.component';
import { LoginComponent }      from './app/login/login.component';
import { AuthGuardService }     from './app/auth-guard.service';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'things', component: ThingsComponent },
  { path: 'addtest', component: AddTestComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'admin', component: UploadPageComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
