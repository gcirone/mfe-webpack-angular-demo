import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'team-one',
  //   loadChildren: () => import(('team-one/team-one.module')).then(({ TeamOneModule }) => TeamOneModule)
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
