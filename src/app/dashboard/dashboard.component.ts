import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gotomyWork(){
    this.router.navigate(['/mywork']); 
}
gotoAbout(){
    this.router.navigate(['/about']); 
}
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
