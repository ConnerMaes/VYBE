import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authSerive: AuthService) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('background-image');
  }

  ngOnInit() {
  }

}
