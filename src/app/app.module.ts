import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthModule } from './features/auth/auth.module';

import {   HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors,  } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    FormsModule
],
  providers: [provideHttpClient(withInterceptors([authInterceptor,loaderInterceptor,errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
