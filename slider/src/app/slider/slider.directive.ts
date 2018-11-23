

import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
  
  @Directive({
      selector: '[appSlider]'
  })
  export class SliderDirective {
      constructor(private renderer: Renderer2, private el: ElementRef){
  
      }

      @Input('appSlider') elementIndex: number;
    
  }