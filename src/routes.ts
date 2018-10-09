import { Routes }             from '@angular/router';
import { BlogComponent }      from './app/blog/blog.component';
import { ThingsComponent }    from './app/things/things.component';
import { HomeComponent }      from './app/home/home.component';
import { UploadPageComponent } from './app/admin/upload-page/upload-page.component';
import { AddTestComponent } from './app/admin/add-test/add-test.component';
import { LoginComponent }      from './app/login/login.component';
import { AuthGuardService }     from './app/auth-guard.service';
import { PostComponent } from './app/blog/post/post.component';
import { MainAdminComponent } from './app/admin/main/main.component';
import { DashboardComponent } from './app/admin/dashboard/dashboard.component';
import { TestimonalListComponent } from './app/admin/testimonal-list/testimonal-list.component';
import { TestimonialEditComponent } from './app/admin/testimonial-edit/testimonial-edit.component';
import { BlogListComponent } from './app/admin/blog-list/blog-list.component';
import { BlogEditComponent } from './app/admin/blog-edit/blog-edit.component';
import { ThingsListComponent } from './app/admin/things-list/things-list.component';
import { ThingsEditComponent } from './app/admin/things-edit/things-edit.component';
import { ThingsAddComponent } from './app/admin/things-add/things-add.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post/:link', component: PostComponent },
  { path: 'things', component: ThingsComponent },
  // { path: 'addtest', component: AddTestComponent },
  // { path: 'upload', component: UploadPageComponent },
  // { path: 'admin', component: UploadPageComponent, canActivate: [AuthGuardService]},
  {
     path: 'admin',
     component: MainAdminComponent,
     canActivate: [AuthGuardService],
     children: [
        { path: '', component: DashboardComponent },
        { path: 'blog-add', component: UploadPageComponent },
        { path: 'blog-list', component: BlogListComponent },
        { path: 'blog-edit/:key', component: BlogEditComponent },
        { path: 'thing-add', component: ThingsAddComponent },
        { path: 'thing-list', component: ThingsListComponent },
        { path: 'thing-edit/:key', component: ThingsEditComponent },
        { path: 'testimonial-add', component: AddTestComponent },
        { path: 'testimonial-list', component: TestimonalListComponent },
        { path: 'testimonial-edit/:key', component: TestimonialEditComponent }
     ]
   },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
