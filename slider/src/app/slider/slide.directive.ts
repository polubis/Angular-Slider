




import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2
} from "@angular/core";

@Directive({
    selector: '[appSlide]'
})
export class SlideDirective {
    constructor(private renderer: Renderer2, private el: ElementRef){

    }

    @HostListener('load') onImageLoad(){
        this.renderer.removeClass(this.el.nativeElement, 'loading-image');
        this.renderer.addClass(this.el.nativeElement, 'loaded-image');
    }
  
}