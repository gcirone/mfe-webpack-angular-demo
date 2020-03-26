import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderComponent } from './lazy-loader.component';
export { LazyLoaderConfig } from './lazy-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LazyLoaderComponent],
  exports: [LazyLoaderComponent]
})
export class LazyLoaderModule {}
