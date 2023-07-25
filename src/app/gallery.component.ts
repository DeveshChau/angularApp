import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-gallery',
  template: `<ng-content></ng-content><p #child>paragraph</p>`,
  viewProviders: [GalleryLoggerService]
})
export class GalleryComponent implements OnInit,AfterViewInit, AfterContentInit {
  test: string = 'gallery';
  @Input() parentToChild: string = 'Empty string';
  @ViewChild('child') childRef!: ElementRef;
  @ContentChild('header') contentHeader!: ElementRef;
  constructor(private logger: GalleryLoggerService){
    console.log('Constructor');
    console.log('input property initialized not updated');
    console.log('viewChild and contentChild not initialized');
    console.log('property', this.test);
    console.log('form input', this.parentToChild);
    console.log('from viewChild', this.childRef);
    console.log('from contentChild', this.contentHeader);
    console.log('**********************');
      
  }
  ngOnChanges() {
    console.log('ngOnChanges');
    console.log('input property updated');
    console.log('viewChild and contentChild not initialized');
    console.log('form input', this.parentToChild);
    console.log('from viewChild', this.childRef);
    console.log('from contentChild', this.contentHeader);
    console.log('**********************');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('viewChild and contentChild not initialized');
    console.log('from viewChild', this.childRef);
    console.log('from contentChild', this.contentHeader);
    console.log('**********************');
    // this.logger.log('gallery component');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
    console.log('from viewChild', this.childRef);
    console.log('from contentChild', this.contentHeader);
    console.log('**********************');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('contentChild is initialized but viewChild is not initialized');
    console.log('from contentChild', this.contentHeader);
    console.log('from viewChild', this.childRef);
    console.log('**********************');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('viewChild is Initialized');
    console.log('from viewChild', this.childRef);
    console.log('**********************');
  }
}
