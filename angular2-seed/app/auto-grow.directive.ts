import { Directive, ElementRef, Renderer } from 'angular2/core';

@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(onblur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    constructor
        (private el: ElementRef, private render: Renderer) {}

    onFocus() {
        this.render.setElementStyle(this.el, 'width', '200')
    }
    onBlur() {
        this.render.setElementStyle(this.el, 'width', '120')
    }
}