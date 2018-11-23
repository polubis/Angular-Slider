import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  Input,
  ChangeDetectorRef,
  AfterViewInit
} from "@angular/core";
import { Subject, Observable, BehaviorSubject, fromEvent, timer } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  
  @ViewChild('slider') slider: ElementRef;

  @Input() jump?: number;

  sliderItems: any[] = [
    {id: 0, name: "Itemek 1", content: "lorepomdsa  ds adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 0, name: "Itemek 1", content: "lorepomdsa  ds adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 0, name: "Itemek 1", content: "lorepomdsa  ds adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 0, name: "Itemek 1", content: "lorepomdsa  ds adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 0, name: "Itemek 1", content: "lorepomdsa  ds adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 1, name: "Itemek 2", content: "adadsa ad asda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 2, name: "Itemek 3", content: "lorepomdsa  ds adadasda dasas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {id: 3, name: "Itemek 4", content: "lorepomdsa  ds adadsa addsas dsa saadsa", src: "https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },

  ];

  bg: string = "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  sliderJump: number = 0;

  currentScrollState: number = 0;
  maxScrollState: number = 0;
  initialClientWidth: number = 0;

  currentPage: number = 0;

  pages: number[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  onScroll$ = new BehaviorSubject<boolean>(false);

  ngOnInit() {
  }

  scrollByDotClick(index: number){
    if(index !== this.currentPage){
      this.onScroll$.next(true);
      this.currentScrollState = this.sliderJump * (index + 1);
      this.slider.nativeElement.scrollLeft = this.sliderJump * index;
  
      this.currentPage = index; 
    }
  }
  setPageRanges(){
    if(this.jump){
      this.sliderJump = this.jump;
    }
    else{
      this.sliderJump = this.initialClientWidth - 500;
    }
  }

  ngAfterViewInit(){
    const scrollSource = fromEvent(this.slider.nativeElement, "scroll").pipe(debounceTime(200))
      .subscribe(value => {
        this.onScroll$.next(false);
      });

    this.maxScrollState = this.slider.nativeElement.scrollWidth;
    this.currentScrollState = this.slider.nativeElement.clientWidth;
    this.initialClientWidth =  this.slider.nativeElement.clientWidth;
    
    this.currentPage = this.pages.length === 1 ? -1 : 0;

    this.setPageRanges();  

    this.pages = this.calculateNumberOfPages();

    this.changeDetectorRef.detectChanges();
  }

  calculateNumberOfPages(){
    let pages: number[]= [this.initialClientWidth];
    let acc: number = this.initialClientWidth;
    while(this.maxScrollState > acc){
      acc += this.sliderJump;
      pages.push(acc);
    }
    return pages;
  }

  onClickLeftButton = () => {
    this.onScroll$.next(true);
    this.currentScrollState = this.currentScrollState - this.sliderJump;
    this.currentPage = this.currentPage - 1;
    this.slider.nativeElement.scrollLeft = this.slider.nativeElement.scrollLeft - this.sliderJump;
  }

  onClickRightButton = () => {
    this.onScroll$.next(true);
    this.currentScrollState = this.currentScrollState + this.sliderJump;
    this.currentPage = this.currentPage + 1;
    this.slider.nativeElement.scrollLeft = this.slider.nativeElement.scrollLeft + this.sliderJump;
  }

}
