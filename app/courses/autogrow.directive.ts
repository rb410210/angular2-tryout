import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()' 
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        console.log("In Constructor");
        
    }

    onFocus() {
        console.log("onFocus()");
        console.log("this.el", this.el);
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gold');
        this.renderer.setElementStyle(this.el.nativeElement, 'min-width', '500px');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', null);
        this.renderer.setElementStyle(this.el.nativeElement, 'min-width', null);
    }
}