import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  public myFunction() {
    var x = document.getElementById("myDIV");
        x.style.visibility = "visible";
  
  }

  ngOnInit() {
  }

}
