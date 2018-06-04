import { Iwe7AdvsPopupComponent } from './iwe7-advs-popup/iwe7-advs-popup';
import {
    ViewContainerRef, Injector,
    ViewRef, ɵComponentType as ComponentType
} from '@angular/core';
import {
    Injectable, ComponentFactoryResolver,
    Type, NgModuleRef, ApplicationRef
} from '@angular/core';
import { DomPortalHost, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
@Injectable({
    providedIn: 'root'
})
export class Iwe7AdvsService {
    private rootView: ViewContainerRef;
    attached: boolean = false;
    outlet: DomPortalHost;
    element: any;
    constructor(
        public componentFactoryResolver: ComponentFactoryResolver,
        public injector: Injector,
        public moduleRef: NgModuleRef<any>,
        public appRef: ApplicationRef,
    ) {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
        console.log(this.outlet);
        this.outlet = new DomPortalHost(this.element, this.componentFactoryResolver, this.appRef, this.injector);
    }

    setRootView(view: ViewContainerRef) {
        this.rootView = view;
    }

    attachComponent(comp: any) {
        const compRef = new ComponentPortal(comp);
        this.outlet.attachComponentPortal(compRef);
    }

    attachTemplate(comp: any) {
        const compRef = new TemplatePortal(comp, this.rootView);
        this.outlet.attachTemplatePortal(compRef);
    }

    closePopup() { }
}
