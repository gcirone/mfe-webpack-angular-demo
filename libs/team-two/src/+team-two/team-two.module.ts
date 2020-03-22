import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamTwoComponent } from './team-two.component';

const routes: Routes = [{ path: '', component: TeamTwoComponent }];

@NgModule({
  declarations: [TeamTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TeamTwoModule {}
