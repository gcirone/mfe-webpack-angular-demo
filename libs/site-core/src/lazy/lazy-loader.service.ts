import { Compiler, Injectable, Injector, Type, ViewContainerRef, ɵNgModuleType as NgModuleType } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LazyLoaderService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  bootstrapModule(viewContainer: ViewContainerRef, moduleType: Promise<Type<any>>) {
    return this.loadModule(moduleType)
      .then(({ bootstrap, componentFactoryResolver }) => {
        if (bootstrap[0]) {
          viewContainer.clear();

          const componentFactory = componentFactoryResolver.resolveComponentFactory(bootstrap[0]);
          const componentRef = viewContainer.createComponent(componentFactory);

          return { componentRef };
        }
      });
  }

  loadModule(moduleType: Promise<Type<any>>) {
    return moduleType
      .then(moduleType => this.compiler.compileModuleAsync(moduleType))
      .then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        const { bootstrap, exports } = (moduleFactory.moduleType as NgModuleType).ɵmod;

        return {
          bootstrap,
          exports,
          instance: moduleRef.instance,
          componentFactoryResolver: moduleRef.componentFactoryResolver
        }
      });
  }
}
