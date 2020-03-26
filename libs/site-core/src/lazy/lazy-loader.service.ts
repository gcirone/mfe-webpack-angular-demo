import { Compiler, Injectable, Injector, Type, ViewContainerRef, ɵNgModuleType as NgModuleType } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LazyLoaderService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  bootstrapModule(viewContainer: ViewContainerRef, moduleType: Promise<Type<any>>, componentName?: string) {
    return this.loadModule(moduleType).then(({ bootstrap, exports, componentFactoryResolver }) => {
      let component = componentName ? (exports as any).filter((cmp) => cmp.name === componentName)[0] : bootstrap[0];

      if (component) {
        viewContainer.clear();

        const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = viewContainer.createComponent(componentFactory);

        return { componentRef };
      }
    });
  }

  loadModule(moduleType: Promise<Type<any>>) {
    return moduleType
      .then((moduleType) => this.compiler.compileModuleAsync(moduleType))
      .then((moduleFactory) => {
        const moduleRef = moduleFactory.create(this.injector);
        const { bootstrap, exports } = (moduleFactory.moduleType as NgModuleType).ɵmod;

        return {
          bootstrap,
          exports,
          instance: moduleRef.instance,
          componentFactoryResolver: moduleRef.componentFactoryResolver
        };
      });
  }
}
