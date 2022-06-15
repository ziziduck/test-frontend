import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    x[1].style.display = "none";
    carousel();
  }
  plusDivs(n: any): void  {   //手動換頁
      this.showDivs(slideIndex += n);
  }
  showDivs(n: number) {
    var i;
    var x: any = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  
}

var x: any = document.getElementsByClassName("mySlides");
var slideIndex = 1;


function carousel() {   //自動換頁
  var i;
  var x: any = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}