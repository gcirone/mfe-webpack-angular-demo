import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamOneComponent } from './team-one.component';

const routes: Routes = [{ path: '', component: TeamOneComponent }];

@NgModule({
  declarations: [TeamOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TeamOneModule {}
