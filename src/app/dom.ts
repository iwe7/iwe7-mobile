import {
    ComponentPortal, TemplatePortal,
    DomPortalOutlet
} from '@angular/cdk/portal';
import {
    ɵComponentType as ComponentType, ViewContainerRef,
    Injector, TemplateRef, ApplicationRef,
    ComponentFactoryResolver
} from '@angular/core';
export function createComponentPortal<T>(
    componentType: ComponentType<T>,
    viewContainerRef?: ViewContainerRef,
    injector?: Injector
) {
    return new ComponentPortal(componentType);
}

export function createTemplatePortal<C>(
    template: TemplateRef<C>,
    viewContainerRef: ViewContainerRef,
    context?: C
) {
    return new TemplatePortal(template, viewContainerRef, context);
}

export function createDomPortalOutlet(
    outletElement: Element,
    _componentFactoryResolver: ComponentFactoryResolver,
    _appRef: ApplicationRef,
    _defaultInjector: Injector
) {
    return new DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector);
}
