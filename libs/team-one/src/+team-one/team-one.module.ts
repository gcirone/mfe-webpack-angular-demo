import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamOneComponent } from './team-one.component';
import { LoginService } from 'site-core';

const routes: Routes = [
  { path: '', component: TeamOneComponent },
];

@NgModule({
  declarations: [
    TeamOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    LoginService
  ]
})
export class TeamOneModule {}
