import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule, LazyLoaderModule } from 'site-core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found.component';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './components/navbar.component';

const siteCoreModules = [AuthModule, LazyLoaderModule];

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'team-one',
    loadChildren: () => import(('teamone/team-one.module')).then(({ TeamOneModule }) => TeamOneModule)
  },
  {
    path: 'team-two',
    loadChildren: () => import(('teamtwo/team-two.module')).then(({ TeamTwoModule }) => TeamTwoModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' }), ...siteCoreModules],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
