import { ElementRef, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export abstract class ComponentBase {

    protected destroyed$: Subject<boolean> = new Subject<boolean>();
    protected selector: string;


    constructor(protected elementRef: ElementRef) {

        this.selector = elementRef.nativeElement.tagName;

    }

    destroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.unsubscribe();
        console.log(`ngOnDestroy: ${this.selector}`);

    }

}