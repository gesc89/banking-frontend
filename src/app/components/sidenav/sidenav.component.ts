import { Component, OnInit } from '@angular/core';
import { LoginSharedService } from 'src/app/services/login-shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private loginService: LoginSharedService) { }


  ngOnInit() {


  }

}
