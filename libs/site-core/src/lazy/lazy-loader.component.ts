import { Component, ElementRef, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from './lazy-loader.service';

export interface LazyLoaderConfig {
  moduleType: () => Promise<Type<any>>;
  componentName?: string;
}

@Component({ selector: 'lazy-loader', template: '' })
export class LazyLoaderComponent implements OnInit {
  @Input() config: LazyLoaderConfig;

  constructor(private lazyLoaderService: LazyLoaderService, private viewContainerRef: ViewContainerRef, private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.remove();
    this.lazyLoaderService.bootstrapModule(this.viewContainerRef, this.config.moduleType(), this.config.componentName);
  }
}
