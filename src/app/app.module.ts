import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule  } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes }               from '@angular/router';

import { environment } from '../environments/environment';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { AngularFireModule }          from 'angularfire2';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { AngularFireAuthModule }      from 'angularfire2/auth';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularFireList }   from 'angularfire2/database';

import { EmailSendService }   from './email-send.service';
import { UploadService }        from './upload.service';
import { FileUploaderServiceService } from './file-uploader-service.service';
import { appRoutes }      from '../routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ThingsComponent } from './things/things.component';
import { BlogComponent } from './blog/blog.component';
import { UploadPageComponent } from './admin/upload-page/upload-page.component';
import { LoginComponent } from './login/login.component';
import { AddTestComponent } from './admin/add-test/add-test.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { YoutubePipe } from './youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ResourcesComponent,
    ContactComponent,
    NavComponent,
    ThingsComponent,
    BlogComponent,
    UploadPageComponent,
    LoginComponent,
    AddTestComponent,
    TestimonialComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash : true}),
    CarouselModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    EmailSendService,
    UploadService,
    FileUploaderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
