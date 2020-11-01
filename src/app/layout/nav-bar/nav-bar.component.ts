import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

}
