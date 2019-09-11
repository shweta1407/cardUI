import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {

  constructor() { }

  public myFunction() {
    var x = document.getElementById("container3");
        x.style.visibility = "visible";
  
  }
  ngOnInit() {
  }

}
