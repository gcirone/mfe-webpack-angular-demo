import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaymentComponent],
  exports: [PaymentComponent]
})
export class PaymentModule {}
